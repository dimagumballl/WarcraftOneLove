import React from 'react'
import './ForMS.css'
import SlotInMainSlot from './SlotInMainSlot/SlotInMainSlot'
import {Link} from 'react-router-dom'
import Maps from "../Maps"

const onlySixSlot=(Ar)=>{
    if(Ar.length<5)
        Ar=Ar.slice(0,Ar.length);
    else
        Ar=Ar.slice(0,6);
    return Ar
}
const array = onlySixSlot(Maps.map)
function MainSlot({Data}){
    
    return(
        <div className="FullSlot">
            <div className="Backg">
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
            <Link to={Data.path}><button className="MainSlotbutton">{Data.name}</button></Link>
            </div>
                {array.map(({
                    id,
                    name,
                    img,
                    way
                })=>(
                    <SlotInMainSlot
                    key={id}
                    id={id}
                    name={name}
                    img={img}
                    path={Data.path}
                    way={way}
                />
                ))}
                
                </div>
            </div>
            
        </div>
    )
}

export default MainSlot