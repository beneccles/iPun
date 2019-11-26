import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import star from '../../../assets/iconmonstr-star-3.svg'
import recent from '../../../assets/iconmonstr-clock-thin.svg'
import voicemail from '../../../assets/voicemail-24px.svg'
import contact from '../../../assets/supervised_user_circle-24px.svg'
import phoneicon from '../../../assets/iconmonstr-phone-1.svg'
import asterisk from '../../../assets/asterisk.svg'
import hashtag from '../../../assets/iconmonstr-hashtag-1.svg'
import deletetag from '../../../assets/iconmonstr-x-mark-13.svg'
import "./Keypad.scss";
import circle from '../../../assets/iconmonstr-circle-1.svg'

export default function Keypad() {

    const [number, setNumber] = useState("");

    // Catch for delay on setOutgoingNumber event.
    // UseEffect makes sure that the component updates after every button press,
    // to be immediately display in #number-output.
    useEffect(() => {
        // Once we hit three digits, add a - symbol
        if (number.length === 3) {
            setNumber(number + "-")
        }
        let target =  document.getElementById("number-output")
        target.innerHTML = number;
    })
    const setOutgoingNumber =  (num) => {
        let target =  document.getElementById("number-output")
        // Set the number into the call stack.
        
        setNumber(number + num)
        target.innerHTML = number;

    }

    return (
        <div className="Keypad">
            <div id="number">
                <h1 id="number-output"></h1>
            </div>
            <div id="keypad-buttons">
                <div id="first-row">
                    <div className="keypad-button first-column" onClick={() => setOutgoingNumber("1")}>
                        <h1>1</h1>
                       <div></div>
                    </div>
                    <div className="keypad-button second-column" onClick={() => setOutgoingNumber("2")}>
                        <h1>2</h1>
                        <p>A B C</p>
                    </div>
                    <div className="keypad-button" onClick={() => setOutgoingNumber("3")}>
                        <h1>3</h1>
                        <p>D E F</p>
                    </div>
                </div>
                <div id="second-row">
                    <div className="keypad-button first-column" onClick={() => setOutgoingNumber("4")}>
                        <h1>4</h1>
                        <p>G H I</p>
                    </div>
                    <div className="keypad-button second-column" onClick={() => setOutgoingNumber("5")}>
                        <h1>5</h1>
                        <p>J K L</p>
                    </div>
                    <div className="keypad-button" onClick={() => setOutgoingNumber("6")}>
                        <h1>6</h1>
                        <p>M N O</p>
                    </div>
                </div>
                <div id="third-row">
                    <div className="keypad-button first-column" onClick={() => setOutgoingNumber("7")}>
                        <h1>7</h1>
                        <p>P Q R S</p>
                    </div>
                    <div className="keypad-button second-column" onClick={() => setOutgoingNumber("8")}>
                        <h1>8</h1>
                        <p>T U V</p>    
                    </div>
                    <div className="keypad-button" onClick={() => setOutgoingNumber("9")}>
                         <h1>9</h1>
                         <p>W X Y Z</p>   
                    </div>
                </div>
                <div id="fourth-row">
                    <div className="keypad-button first-column" id="star">
                        <img src={asterisk} alt="asterisk symbol" />
                    </div>
                    <div className="keypad-button second-column" onClick={() => setOutgoingNumber("0")}>
                        <h1>0</h1>
                        <p>+</p>          
                    </div>
                    <div className="keypad-button" id="pound">
                         <img src={hashtag} alt="hashtag" />
                    </div>
                </div>
                <div id="fifth-row">
                    <div className="empty">

                    </div>
                    <div className="keypad-button" id="commit-call">
                        <img src={phoneicon} alt="Phone Icon" />
                    </div>
                    <div id="delete">
                        {number.length > 0 ? <img src={deletetag} alt="Delete Button" /> : null}
                    </div>

                </div>
            </div>
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
        </div>
    )
}