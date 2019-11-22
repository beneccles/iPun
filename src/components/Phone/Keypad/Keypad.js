import React from 'react';
import "./Keypad.scss";
import circle from '../../../assets/iconmonstr-circle-1.svg'

export default function Keypad() {
    return (
        <div className="Keypad">
            <div id="number-output">
            </div>
            <div id="first-row">
                <img src={circle} alt="keypadNum"/>
                <img src={circle} alt="keypadNum"/>
                <img src={circle} alt="keypadNum"/>
            </div>
            <div id="second-row">
                <img src={circle} alt="keypadNum"/>
                <img src={circle} alt="keypadNum"/>
                <img src={circle} alt="keypadNum"/>
            </div>
            <div id="third-row">
                <img src={circle} alt="keypadNum"/>
                <img src={circle} alt="keypadNum"/>
                <img src={circle} alt="keypadNum"/>
            </div>
        </div>
    )
}