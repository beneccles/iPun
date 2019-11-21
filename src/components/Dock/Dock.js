import React from 'react';
import {Link} from 'react-router-dom';
import phoneImage from '../../assets/iconmonstr-phone-1.svg'
import './Dock.scss';

export default function Dock() {
    return (
        <div className="Dock">
            <Link id="Phone" to="/phone" className="appLink">
                <img src={phoneImage} alt="Phone Image"/>
            </Link>
            <Link id="browser" className="appLink">
                {/* Thus begins the chaos of me trying to recreate the safari icon with CSS */}
                <div id="browserCircle">
                    <div id="radialDial">
                        <div id="upperRadial">
                        </div>
                        <div id="lowerRadial">
                        </div>
                    </div>
                </div>
            </Link>
            <Link className="appLink">
                
            </Link>
            <Link className="appLink">
                
            </Link>
        </div>
    )
}