import React, {useState, useEffect} from 'react';
import phoneicon from '../../../assets/iconmonstr-phone-1.svg'
import asterisk from '../../../assets/asterisk.svg'
import hashtag from '../../../assets/iconmonstr-hashtag-1.svg'
import deletetag from '../../../assets/iconmonstr-x-mark-13.svg'
import Dock from '../Dock/Dock'
import axios from 'axios'
import "./Keypad.scss"

export default function Keypad() {
    const [number, setNumber] = useState("");
    const [rawNumber, setRaw] = useState("");
    const [E164, setE164] = useState("+1")

    // Catch for delay on setOutgoingNumber event.
    // UseEffect makes sure that the component updates after every button press,
    // to be immediately display in #number-output.
    useEffect(() => {
        // Once we hit three digits, add a - symbol
        if (number.length === 3) {
            setNumber(number + "-")
        }

        // At 7 Digits, add in () to enclose the area code.
        if (number.length === 7) {
            let areaCode = `(${number.substring(0, 3)}) ${number.substring(4, 7)}-`
            setNumber(areaCode)
        }

        let target =  document.getElementById("number-output")
        target.innerHTML = number;

        // If the user enters 11 digits, remove US phone formatting to prep for internal phone format.
        if (rawNumber.length > 10 && number[0] === "(") {
            setNumber(rawNumber)
            target.innerHTML = number
        }
    }, [number, rawNumber])
    const setOutgoingNumber =  (num) => {
        let target =  document.getElementById("number-output")
        // Set the number into the call stack.
        
        setNumber(number + num)
        setRaw(rawNumber + num)
        setE164(E164 + num)

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
                        {/* Only display if there is something to delete in the number variable */}
                        {number.length > 0 ? <img src={deletetag} alt="Delete Button" /> : null}
                    </div>

                </div>
            </div>
            <Dock />
        </div>
    )
}