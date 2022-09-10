import React from "react"
import logo from "../images/logo.svg"
import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

export default function Header() {

    const [openMenu, setOpenMenu] = React.useState(false)
    function handleClick() {
        setOpenMenu(prevState => !prevState)
    }

    const hide = {
        display: "none"
    }
    const show = {
        display: "block"
    }

    const [hover, setHover] = React.useState("")
    function handleHover1() {
        setHover(1)
    }
    function handleHover2() {
        setHover(2)
    }
    function handleHover3() {
        setHover(3)
    }
    function handleHover4() {
        setHover(4)
    }
    function handleHover5() {
        setHover(5)
    }
    function handleMouseOut() {
        setHover("")
    }

    return (
        <header>
            <div className="desktop--header">
                <a href="index.html"><img src={logo} alt="easybank logo"/></a>
                <ul className="nav--list">
                    <li onMouseOver={handleHover1} onMouseOut={handleMouseOut}>
                        <div>Home</div>
                        {hover === 1 && <span className="hover--strip"></span>}
                    </li>
                    <li onMouseOver={handleHover2} onMouseOut={handleMouseOut}>
                        <div>About</div>
                        {hover === 2 && <span className="hover--strip"></span>}
                    </li>
                    <li onMouseOver={handleHover3} onMouseOut={handleMouseOut}>
                        <div>Contact</div>
                        {hover === 3 && <span className="hover--strip"></span>}
                    </li>
                    <li onMouseOver={handleHover4} onMouseOut={handleMouseOut}>
                        <div>Blog</div>
                        {hover === 4 && <span className="hover--strip"></span>}
                    </li>
                    <li onMouseOver={handleHover5} onMouseOut={handleMouseOut}>
                        <div>Careers</div>
                        {hover === 5 && <span className="hover--strip"></span>}
                    </li>
                </ul>
                <button>Request Invite</button>
            </div>
            <div className="mobile--header">
                <a href="index.html"><img src={logo} alt="easybank logo"/></a>
                {!openMenu && <img className="menu" alt="" src={menu} onClick={handleClick}/>}
                {openMenu && <img className="close" alt="" src={close} onClick={handleClick}/>}
                <div className="dropdown" style={openMenu ? show : hide}>
                    <ul className="nav--list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}