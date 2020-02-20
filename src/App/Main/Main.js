import React from 'react';
import './Main.css'
import MainMenu from './MianMenu/MainMenu'
import{Route} from "react-router-dom"
import Maps from './Maps/Maps'

function Main(){
    return(
        <div className="Main">
            
            <div className="Backg">
                <Route exact path="/" render={()=>(
                    <MainMenu/>
                )}/>
                <Route path="/Maps" render={Maps}/>
            </div>
        </div>
    )
}
export default Main