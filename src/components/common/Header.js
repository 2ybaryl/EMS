import React from "react";
import { Link } from "react-router-dom";
import './stylesheets/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="main-header">
                    <div className="logo">SUPERON</div>
                    <div className="Sub-text">Hello <br></br><span>Deepak Kumar</span> </div>
                    <div className= "search-box">
                        <input type = "text" placeholder="Search here..."></input>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                    <div className = "main-nav">
                        <ul>
                            <li><Link to = "/myAccount">My Account</Link> &#9013;</li>
                            <li>More &#9013;</li>
                        </ul>
                    </div>
                    <div class = "notifications">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                </div>
                <div className="sub-header">
                    <ul className="sub-nav">
                        <li><Link to = "/">Home</Link></li>
                        <li>Order Tracking</li>
                        <li><Link to = "/target">Target</Link></li>
                        <li><Link to = "/attendance">Attendance</Link></li>
                        <li><Link to = "/dailyWorking">Daily Working</Link></li>
                        <li><Link to = "/weeklyPlan">Weekly Plan</Link></li>
                        <li><Link to = "/request">Request</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}
export default Header