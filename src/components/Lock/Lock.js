import React, {Component} from 'react';
import './Lock.scss';

export default class Lock extends Component{
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
            time: null
        }
    }

    componentDidMount() {
        let data = new Date();
        let time = `${data.getHours()}:${data.getMinutes()}`
        let date = ""

        switch(data.getMonth()){
            case 0:
                date += "January"
                break;
            case 1:
                date += "Feburary"
                break;
            case 2:
                date += "March"
                break;
            case 3:
                date += "April"
                break;
            case 4:
                date += "May"
                break;
            case 5:
                date += "June"
                break;
            case 6:
                date += "July"
                break;
            case 7:
                date += "August"
                break;
            case 8:
                date += "September"
                break;
            case 9:
                date += "October"
                break;
            case 10:
                date += "November"
                break;
            case 11:
                date += "December"
                break;
            default:
                break;
        }
        console.log(data.getDay())
        this.setState({
            time: data
        })
    }

render() {
    return (
        <div className="Lock">
    </div>
  );
}
}


