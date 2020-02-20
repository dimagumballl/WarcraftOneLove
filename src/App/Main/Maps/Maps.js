import React from 'react';
import '../Main.css'
import './Maps.css'
import DMaps from '../MianMenu/Maps'
import MapsSlot from './MapsSlot/MapsSlot'

function Maps(){
    return (
        <div className="Maps">
            <h1>Maps</h1>
            <hr/>
            {DMaps.map.map(({
                id,
                name,
                img,
                description,
                way
            })=>(
                <MapsSlot
                    description={description}
                    key={id}
                    id={id}
                    name={name}
                    img={img}
                    way={way}
                />
            ))}
        </div>
    )
}

export default Maps