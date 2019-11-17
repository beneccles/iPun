import React from 'react';
import cell from '../../assets/signal_cellular_alt-24px.svg'
import wifi from '../../assets/wifi-24px.svg'
import battery from '../../assets/battery_std-24px.svg'
import "./Status.scss"

export default function Status() {
    return (
        <div className="Status">
            <div id="notchArea">
                    <div id="status">
                        <img id="cell" src={cell} alt="Cell status" />
                        <img id="wifi" src={wifi} alt="wifi status" />
                        <img id="battery" src={battery} alt="Battery status" />
                    </div>
                </div>
        </div>
    )
}