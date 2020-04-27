import React from "react"
import { Link } from "react-router-dom"
import { FaCalendarAlt, FaCalendarPlus, FaUserAlt, FaBars } from "react-icons/fa"
import "../style/_header.scss"

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/"><img src={require('../images/logo.png')} alt={"logo"} /></Link>
                <ul className="nav-links">
                    <li><Link to="/"><FaCalendarPlus /> Boka tid</Link></li>
                    <li><Link to="/bokningar"><FaCalendarAlt /> Mina bokningar</Link></li>
                    <li><Link to="/"><FaUserAlt /> Login/logout</Link></li>
                </ul>
                <div id="hamburger"><FaBars /></div>
            </nav>
        )
    }
}
export default Header;