import React from 'react';
import Dock from '../Dock/Dock'
import Status from '../Status/Status'
import './Home.scss';

export default function Home() {
    return (
        <div className="Home">
            <Status />
            <div id="appHome">
                <div className="appRow">
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                </div>
                <div className="appRow">
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                </div>
                <div className="appRow">
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                </div>
                <div className="appRow">
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                </div>
                <div className="appRow">
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                </div>
                <div className="appRow">
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                    <div className="appLink">

                    </div>
                </div>
            </div>
            <Dock />
        </div>
    )
}