import React from "react";
import './stylesheets/Header.css'
class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="main-header">
                    <div className="logo">Logo</div>
                    <div className="Sub-text">Hello <br></br> Deepak Kumar</div>
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