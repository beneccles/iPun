import React from 'react';
import {Link} from 'react-router-dom';
import star from '../../assets/iconmonstr-star-3.svg'
import recent from '../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../assets/voicemail-24px.svg'
import contact from '../../assets/supervised_user_circle-24px.svg'
import Dock from './Dock/Dock.js'
import "./Phone.scss"

export default function Phone() {
    
    return (
        <div className="Phone">
            <div id="phone-home">
            </div>
            <Dock />
        </div>
    )
}