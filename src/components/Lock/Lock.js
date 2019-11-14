import React, { Component } from 'react';
import cell from '../../assets/signal_cellular_alt-24px.svg'
import wifi from '../../assets/wifi-24px.svg'
import battery from '../../assets/battery_std-24px.svg'
import flashlight from '../../assets/iconmonstr-flashlight-2.svg'
import camera from '../../assets/photo_camera-24px.svg'
import './Lock.scss';

export default class Lock extends Component {
    // This is the Lockscreen Component of the iPun. In web terms,
    // this is going to be our landing page for the app.
    // Requirements for this component:
    // - Display Status Bar at the top of the screen (time, wifi, cell, battery)
    // - Display lock, time and date in middle.
    // - Display notifications.
    // - Display buttons for flashlight and camera, even if they don't do anything.
    // - Display chinbar.
    // const [date, setDate] = useState(new Date());
    constructor() {
        super()
        this.state = {
            time: "",
            date: ""
        }
    }

    componentDidMount() {
        let data = new Date();
        let min = data.getMinutes()

        // If we are in the first 9 minutes of the hour, add a 0 in front of the value,
        // so that the time shows 0# minutes.
        console.log(data.getDay())
        if (min < 10) {
            min = "0" + min.toString()
        }
        let time = `${data.getHours()}:${min}`
        let date = ""

        // Build the Date to put on the Lockscreen
        // Thanks to Intl.DateTimeFormat, we can do this in just 3 lines.
        date += `${new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(data)}, `
        date += `${new Intl.DateTimeFormat('en-US', {month: 'long'}).format(data)} `
        date += data.getDate()
  
        this.setState({
            time: time,
            date: date
        })
    }

    render() {
        const { time, date } = this.state;

        return (
            <div className="Lock">
                <div id="notchArea">
                    <p>E-Mobile</p>
                    <div id="status">
                        <img src={cell} alt="Cell status" />
                        <img src={wifi} alt="wifi status" />
                        <img src={battery} alt="Battery status" />
                    </div>
                </div>
                <div className="lockTime">
                    <p id="time">{time}</p>
                    <p id="date">{date}</p>
                </div>
                <div id="notificationArea">
                    {/* For the Notifications when they are added. */}
                </div>
                <div id="cameraAndLight">
                    <div id="flashlight">
                        <img src={flashlight} alt="flashlight icon" />
                    </div>
                    <div id="camera">
                        <img src={camera} alt="camera icon" />
                    </div>
                </div>
                <div id="chinBar">
                </div>
            </div>
        );
    }
}


