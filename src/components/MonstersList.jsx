import React from 'react'
import { MonsterCard } from './MonsterCard'
import './styles/monstersList.css'

export const MonstersList = ({ monsters }) => {
    console.log(monsters)
    return (
        <div className="app-list">
            { monsters.map((monster) => (<MonsterCard key={ monster.id } monster={ monster } />))}
        </div>
    )
}