import React from 'react';
import star from '../../assets/iconmonstr-star-3.svg'
import recent from '../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../assets/voicemail-24px.svg'
import contact from '../../assets/supervised_user_circle-24px.svg'
import "./Phone.scss"

export default function Phone() {
    return (
        <div className="Phone">
            <div id="phone-home">
            </div>
            <div id="phone-dock">
                <div className="phoneLink">
                    <img src={star} alt="Favorites" />
                </div>
                <div className="phoneLink">
                    <img src={recent} alt="Recent" />
                </div>
                <div className="phoneLink">
                    <img src={contact} alt="Contact" />
                </div>
                <div className="phoneLink">
                    
                </div>
                <div className="phoneLink">
                    <img src={voicemail} alt="Voicemail" />
                </div>
            </div>
        </div>
    )
}