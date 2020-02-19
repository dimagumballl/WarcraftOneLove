import React from 'react'
import './SlotInMainSlot.css'


function SlotInMainSlot({
    id,
    name,
    description,
    img,
    way
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