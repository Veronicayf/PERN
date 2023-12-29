import React from 'react'
import style from './style/navBar.module.css'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Link to='/'> PERN Stack</Link>

            <button onClick={() => navigate('/new')}>New Tasks</button>
        </div>
    )
}

export default NavBar
