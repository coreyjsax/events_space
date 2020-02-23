import React from 'react'
import {Link} from 'react-router-dom'
import {Badge, Icon} from 'antd'
import styles from '../components/styles.css'


const Nav = (props) => {
    return(
        <div className="navbar">
            <Link className="nav-link card-title" to="/">HOME</Link>
            <Link className="nav-link card-title" to="/plan">PLAN YOUR EVENT</Link>
            <Link className="nav-link card-title" to="/contact">CONTACT</Link>
            <Link>
                
                <Badge count={props.cart.length} showZero>
                    <a href="#" className="head-example" />
                </Badge>
                
            </Link>
        </div>
    )
}
export default Nav