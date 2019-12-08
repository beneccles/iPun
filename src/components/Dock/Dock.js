import React from 'react';
import {Link} from 'react-router-dom';
import phoneImage from '../../assets/iconmonstr-phone-1.svg'
import message from '../../assets/iconmonstr-speech-bubble-1.svg'
import note from '../../assets/music_note-24px.svg'
import './Dock.scss';

export default function Dock() {
    return (
        <div className="Dock">
            <Link id="Phone" to="/phone" className="appLink">
                <img src={phoneImage} alt="Phone App"/>
            </Link>
            <Link id="browser" to="/browser" className="appLink">
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
            <Link id="Message" className="appLink">
                <img src={message} alt="Text Message" />
            </Link>
            <Link id="Music" className="appLink">
                <img src={note} alt="Music" />
            </Link>
        </div>
    )
}