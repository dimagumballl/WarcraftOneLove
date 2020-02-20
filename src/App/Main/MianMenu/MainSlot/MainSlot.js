import React from 'react'
import './ForMS.css'
import SlotInMainSlot from './SlotInMainSlot/SlotInMainSlot'
import {Link} from 'react-router-dom'

function MainSlot({Data}){
    return(
        <div className="FullSlot">
            <div className="Backg">
            <Link to={Data.path}><button className="MainSlotbutton">{Data.name}</button></Link>
                {Data.map.map(({
                    id,
                    name,
                    img,
                })=>(
                    <SlotInMainSlot
                    key={id}
                    id={id}
                    name={name}
                    img={img}
                    path={Data.path}
                />
                ))}
                
            </div>
            
        </div>
    )
}

export default MainSlot