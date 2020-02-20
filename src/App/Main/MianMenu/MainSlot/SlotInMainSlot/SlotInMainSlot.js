import React from 'react'
import './SlotInMainSlot.css'
import {Link} from 'react-router-dom'

function SlotInMainSlot({
    id,
    name,
    description,
    img,
    way,
    path
}){
    return(
        <div className="smoleSlot" key={id}>
            <img src={img}/>
            <p data-title={name}>{name}</p>
            <button>download</button>
        </div>
    )
}

export default SlotInMainSlot