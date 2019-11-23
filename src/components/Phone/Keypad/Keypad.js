import React from 'react';
import {Link} from 'react-router-dom';
import star from '../../../assets/iconmonstr-star-3.svg'
import recent from '../../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../../assets/voicemail-24px.svg'
import contact from '../../../assets/supervised_user_circle-24px.svg'
import "./Keypad.scss";
import circle from '../../../assets/iconmonstr-circle-1.svg'

export default function Keypad() {
    return (
        <div className="Keypad">
            <div id="number-output">
            </div>
            <div id="keypad-buttons">
                <div id="first-row">
                    <div className="keypad-button">

                    </div>
                    <div className="keypad-button">
                        
                    </div>
                    <div className="keypad-button">
                        
                    </div>
                </div>
                <div id="second-row">
                    <div className="keypad-button">
                        
                    </div>
                    <div className="keypad-button">
                        
                    </div>
                    <div className="keypad-button">
                        
                    </div>
                </div>
                <div id="third-row">
                    <div className="keypad-button">
                        
                    </div>
                    <div className="keypad-button">
                            
                    </div>
                    <div className="keypad-button">
                            
                    </div>
                </div>
            </div>
            <div id="phone-dock" className="keypad-dock">
                <Link to="/favorites" className="phoneLink">
                    <img src={star} alt="Favorites" />
                </Link>
                <Link to="/recents" className="phoneLink">
                    <img src={recent} alt="Recent" />
                </Link>
                <Link to="/contacts" className="phoneLink">
                    <img src={contact} alt="Contact" />
                </Link>
                <Link to="/keypad" className="phoneLink">
                <div>
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
                </Link>
                <Link to="/voicemail" className="phoneLink">
                    <img src={voicemail} alt="Voicemail" />
                </Link>
                </div>
        </div>
    )
}