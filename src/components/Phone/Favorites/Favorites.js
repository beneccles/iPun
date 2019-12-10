import React from 'react';
import Dock from '../Dock/Dock'
import Header from '../Header/Header'
import "./Favorites.scss";

export default function Favorites() {
    return (
        <div className="Favorites">
            <Header />
            <Dock />
        </div>
    )
}