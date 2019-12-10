import React from 'react';
import Dock from '../Dock/Dock'
import Header from '../Header/Header'
import "./Recents.scss";

export default function Recents() {
    return (
        <div className="Recents">
            <Header />
            <Dock />
        </div>
    )
}