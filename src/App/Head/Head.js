import React from 'react';
import './Head.css'
import {Link} from 'react-router-dom'

function Head(){
    return(
        <div className="MenuHead">
            <div className="Backg">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        SaloNet.
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <li><Link to="/"><button>Home</button></Link></li>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <li><Link to="/Maps"><button>Maps</button></Link></li>
                    </div> 
                </div>
            </div>
        </div>

    )
}
export default Head
