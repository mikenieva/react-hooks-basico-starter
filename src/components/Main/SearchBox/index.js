import React from 'react'

export default function SearchBox (props){
    const handleSubmit = (event) =>{
        event.preventDefault()
        const filteredData = props.data.filter((e) => {
            const fruit = e.fruit.toUpperCase()
            const searchingFruit = event.target.value.toUpperCase()
            return fruit === searchingFruit
        })
        return props.filterAction(filteredData)
    }
        return (
            <div className="SearchBox">
                <form>
                    <input 
                        onChange={(e) => handleSubmit(e)}
                        placeholder="Escribe tu fruta..."
                    />
                </form>
            </div>
        )
}
