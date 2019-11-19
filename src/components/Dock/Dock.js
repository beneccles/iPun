import React from 'react';
import {Link} from 'react-router-dom';
import phoneImage from '../../assets/iconmonstr-phone-1.svg'
import './Dock.scss';

export default function Dock() {
    return (
        <div className="Dock">
            <Link id="Phone" to="/Phone" className="appLink">
                <img src={phoneImage} alt="Phone Image"/>
            </Link>
            <div className="appLink">
                
            </div>
            <div className="appLink">
                
            </div>
            <div className="appLink">
                
            </div>
        </div>
    )
}