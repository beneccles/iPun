import React from 'react';
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