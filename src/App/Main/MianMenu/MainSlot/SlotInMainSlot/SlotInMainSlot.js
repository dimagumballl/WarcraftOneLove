import React from 'react'
import './SlotInMainSlot.css'
import {Link} from 'react-router-dom'

function SlotInMainSlot({
    id,
    name,
    img,
    way,

}){
    
    return(
        <div className="col-sm-6 col-md-4 col-lg-2">
            <div className="smoleSlot" key={id}>
                <img src={img}/>
                <p data-title={name}>{name}</p>
                <a href={way} download><button>download</button></a>
            </div>
           
            </div>
    )
}

export default SlotInMainSlot