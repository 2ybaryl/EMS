import React from "react";
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
                            <li>My Account &#9013;</li>
                            <li>More &#9013;</li>
                        </ul>
                    </div>
                    <div class = "notifications">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                </div>
                <div className="sub-header">
                    <ul className="sub-nav">
                        <li>Home</li>
                        <li>Order Tracking</li>
                        <li>Target</li>
                        <li>Attendance</li>
                        <li>Daily Working</li>
                        <li>Weekly Plan</li>
                        <li>Request</li>
                    </ul>
                </div>
            </header>
        );
    }
}
export default Header