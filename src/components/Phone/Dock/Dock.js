import React from 'react';
import {Link} from 'react-router-dom';
import star from '../../../assets/iconmonstr-star-3.svg'
import recent from '../../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../../assets/voicemail-24px.svg'
import contact from '../../../assets/supervised_user_circle-24px.svg'
import circle from '../../../assets/iconmonstr-circle-1.svg'
import './phoneDock.scss'

export default function Dock() {
    return (
        <div id="phone-dock" className="keypad-dock">
                <Link to="/favorites" className="phoneLink phone-dock-pair">
                    <img src={star} alt="Favorites" />
                    <p>Favorites</p>
                </Link>
                <Link to="/recents" className="phoneLink phone-dock-pair">
                    <img src={recent} alt="Recent" id="phone-recent"/>
                    <p>Recents</p>
                </Link>
                <Link to="/contacts" className="phoneLink phone-dock-pair">
                    <img src={contact} alt="Contact" />
                    <p>Contacts</p>
                </Link>
                <Link to="/keypad" className="phoneLink phone-dock-pair" id="keypad-icon">
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
    )
}