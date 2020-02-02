import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/styles.css'


const Nav = () => {
    return(
        <div className="navbar">
           <Link className="nav-link card-title" to="/">HOME</Link>
           <Link className="nav-link card-title" to="/plan">PLAN YOUR EVENT</Link>
           <Link className="nav-link card-title" to="/contact">CONTACT</Link>
        </div>
    )
}
export default Nav