import React from 'react'
import '../Main.css'
import MainSlot from './MainSlot/MainSlot'
import Maps from "./Maps"

function MainMenu(){
    return(
        <div className="MenuS">
            <MainSlot
                Data={Maps}
            />
        </div>
    )
}

export default MainMenu