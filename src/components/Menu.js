import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(){
    return (
        <div>
            <Link to='/Game'>
                <button>Start a Game</button>
            </Link>
        </div>
    )
}