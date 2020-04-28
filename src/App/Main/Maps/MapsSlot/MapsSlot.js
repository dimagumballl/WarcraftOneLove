import React from 'react'
import './MapsSlot.css'
import {Link} from 'react-router-dom'

function MapsSlot({
    id,
    name,
    img,
    description,
    way
}){
    return(
        <div className="MapsSlot" key={id}>
            <div className="MapsImg">
                <img src={img}/>
            </div>
            <div className="MapsSlotInfo">
                <h2>{name}</h2>
                <div className="Description" dangerouslySetInnerHTML={{__html:description}}>
                        
                </div>
            </div>
            <a href={way} download><button>download</button></a>
        </div>
    )
}

export default MapsSlot