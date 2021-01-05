import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className={style.headerStyle}>
            <label className={style.Todo}>Add Todo List</label>
            <ul className={style.list}>
            <li className={style.li}><Link to='/'>Home</Link></li>
            <li className={style.li}><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Header;
