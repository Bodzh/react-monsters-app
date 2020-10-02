import React from 'react'
import './styles/monsterCard.css'

export const MonsterCard = ({ monster }) => {
    return (
        <div className="app-monster-card">
            <img className="monster-card__img" src={ `https://robohash.org/${monster.id}set=set2&size=180x180` } alt="monster shit" />
            <h2> { monster.name }</h2>
        </div>
    )
}