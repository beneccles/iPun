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
                    <div className="keypad-button first-column">

                    </div>
                    <div className="keypad-button second-column">
                        
                    </div>
                    <div className="keypad-button">
                        
                    </div>
                </div>
                <div id="second-row">
                    <div className="keypad-button first-column">
                        
                    </div>
                    <div className="keypad-button second-column">
                        
                    </div>
                    <div className="keypad-button">
                        
                    </div>
                </div>
                <div id="third-row">
                    <div className="keypad-button first-column">
                        
                    </div>
                    <div className="keypad-button second-column">
                            
                    </div>
                    <div className="keypad-button">
                            
                    </div>
                </div>
                <div id="fourth-row">
                    <div className="keypad-button first-column">
                        
                    </div>
                    <div className="keypad-button second-column">
                                
                    </div>
                    <div className="keypad-button">
                                
                    </div>
                </div>
                <div id="fifth-row">
                    <div className="keypad-button">

                    </div>
                </div>
            </div>
            <div id="phone-dock" className="keypad-dock">
                <Link to="/favorites" className="phoneLink phone-dock-pair">
                    <img src={star} alt="Favorites" />
                    <p>Favorites</p>
                </Link>
                <Link to="/recents" className="phoneLink phone-dock-pair">
                    <img src={recent} alt="Recent" />
                    <p>Recents</p>
                </Link>
                <Link to="/contacts" className="phoneLink phone-dock-pair">
                    <img src={contact} alt="Contact" />
                    <p>Contacts</p>
                </Link>
                <Link to="/keypad" className="phoneLink phone-dock-pair">
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
            <p>Keypad</p>
                </Link>
                <Link to="/voicemail" className="phoneLink phone-dock-pair">
                    <img src={voicemail} alt="Voicemail" />
                    <p>Voicemail</p>
                </Link>
                </div>
        </div>
    )
}