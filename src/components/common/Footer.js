import React from "react";
import './stylesheets/Footer.css'
class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="logo">SUPERON</div>
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
                <div className="sub-footer">
                    <div className="copyright">	&#169; 2022 Superon Schweisstechnik India Ltd. All Rights Reserved</div>
                    <div class = "sub-footer-nav">
                        <ul>
                            <li>Help</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer