import React, { useState, useEffect } from 'react'
import Fruit from './Fruit';
import SearchBox from './SearchBox';

export default function Main () {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const fetchData = async () => {
        const res = await fetch('./fruits.json')
        res.json()
        .then(data => setData(data))  
    }
    

    useEffect(() => {
        fetchData(); 
    }, [filteredData])

    const lookForAFruit = (text) => {
           return setFilteredData(text)
    }

    return (
        <div id="Contenido">
            <SearchBox data={data} filterAction={lookForAFruit}/>
            <div id="Frutas">
                <Fruit data={filteredData.length !== 0 ? filteredData : data} />
            </div>
        </div>
    )
}


