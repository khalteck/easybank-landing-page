import React from "react"
import logo from "../images/logo.svg"

export default function Header() {
    return (
        <header>
            <div className="header">
                <img src={logo} alt="easybank logo"/>
                <ul className="nav--list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
                <button>Request Invite</button>
            </div>
        </header>
    )
}