import React from 'react';
import {Link} from 'react-router-dom';
import star from '../../../assets/iconmonstr-star-3.svg'
import recent from '../../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../../assets/voicemail-24px.svg'
import contact from '../../../assets/supervised_user_circle-24px.svg'
import phoneicon from '../../../assets/iconmonstr-phone-1.svg'
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
                        <h1>1</h1>
                        <p> </p>
                    </div>
                    <div className="keypad-button second-column">
                        <h1>2</h1>
                        <p>A B C</p>
                    </div>
                    <div className="keypad-button">
                        <h1>3</h1>
                        <p>D E F</p>
                    </div>
                </div>
                <div id="second-row">
                    <div className="keypad-button first-column">
                        <h1>4</h1>
                        <p>G H I</p>
                    </div>
                    <div className="keypad-button second-column">
                        <h1>5</h1>
                        <p>J K L</p>
                    </div>
                    <div className="keypad-button">
                        <h1>6</h1>
                        <p>M N O</p>
                    </div>
                </div>
                <div id="third-row">
                    <div className="keypad-button first-column">
                        <h1>7</h1>
                        <p>P Q R S</p>
                    </div>
                    <div className="keypad-button second-column">
                        <h1>8</h1>
                        <p>T U V</p>    
                    </div>
                    <div className="keypad-button">
                         <h1>9</h1>
                         <p>W X Y Z</p>   
                    </div>
                </div>
                <div id="fourth-row">
                    <div className="keypad-button first-column">
                        <h1>*</h1>
                    </div>
                    <div className="keypad-button second-column">
                        <h1>0</h1>
                        <p>+</p>          
                    </div>
                    <div className="keypad-button">
                         <h1>#</h1>       
                    </div>
                </div>
                <div id="fifth-row">
                    <div className="keypad-button" id="commit-call">
                        <img src={phoneicon} alt="Phone Icon" />
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
                    <div id="first-row-icon">
                        <img src={circle} alt="keypadNum"/>
                        <img src={circle} alt="keypadNum"/>
                        <img src={circle} alt="keypadNum"/>
                    </div>
                    <div id="second-row-icon">
                        <img src={circle} alt="keypadNum"/>
                        <img src={circle} alt="keypadNum"/>
                        <img src={circle} alt="keypadNum"/>
                    </div>
                    <div id="third-row-icon">
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