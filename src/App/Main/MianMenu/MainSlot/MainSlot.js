import React from 'react'
import './ForMS.css'
import SlotInMainSlot from './SlotInMainSlot/SlotInMainSlot'

function MainSlot({Data}){
    return(
        <div className="FullSlot">
            <div className="Backg">
                <button className="MainSlotbutton">{Data.name}</button>
                {Data.map.map(({
                    id,
                    name,
                    description,
                    img,
                    way
                })=>(
                    <SlotInMainSlot
                    id={id}
                    name={name}
                    description={description}
                    img={img}
                    way={way}
                />
                ))}
                
            </div>
            
        </div>
    )
}

export default MainSlot