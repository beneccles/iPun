import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import star from '../../assets/iconmonstr-star-3.svg'
import recent from '../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../assets/voicemail-24px.svg'
import contact from '../../assets/supervised_user_circle-24px.svg'
import routes from './routes'
import "./Phone.scss"

export default function Phone() {
    const [fav, setFav] = useState(false)
    const [recent, setRecent] = useState(false)
    
    return (
        <div className="Phone">
            <div id="phone-home">
                {routes}
            </div>
            <div id="phone-dock">
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
                    <p>Keypad</p>
                </Link>
                <Link to="/voicemail" className="phoneLink">
                    <img src={voicemail} alt="Voicemail" />
                </Link>
            </div>
        </div>
    )
}