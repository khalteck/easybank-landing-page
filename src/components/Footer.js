import React from "react"
import logo from "../images/logo.svg"
import facebook from "../images/icon-facebook.svg"
import youtube from "../images/icon-youtube.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instaagram from "../images/icon-instagram.svg"

export default function Footer() {
    return (
        <footer>
            <div className="left--half">
                <div className="logo--media">
                    <span><img alt="" src={logo}/> <span className="easy">easybank</span></span>
                    <div>
                        <img style={{marginLeft: "-5px"}} alt="" src={facebook}/>
                        <img alt="" src={youtube}/>
                        <img alt="" src={twitter}/>
                        <img alt="" src={pinterest}/>
                        <img alt="" src={instaagram}/>
                    </div>
                </div>
                <ul className="about--ul">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="copy--div">
                <button>Request Invite</button>
                <p>&copy; Easybank. All Rights Reserved</p>
            </div>
        </footer>
    )
}