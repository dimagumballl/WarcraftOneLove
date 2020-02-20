import React from 'react';
import './Head.css'
import {Link} from 'react-router-dom'

function Head(){
    return(
        <div className="MenuHead">
            <div className="Backg">
                SaloNet.
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="/Maps"><button>Maps</button></Link></li>
            </div>
        </div>

    )
}
export default Head
