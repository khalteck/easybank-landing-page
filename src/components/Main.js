import React from "react"
import hero from "../images/image-mockups.png"
import online from "../images/icon-online.svg"
import budget from "../images/icon-budgeting.svg"
import onboard from "../images/icon-onboarding.svg"
import api from "../images/icon-api.svg"
import currency from "../images/image-currency.jpg"
import food from "../images/image-restaurant.jpg"
import plane from "../images/image-plane.jpg"
import confetti from "../images/image-confetti.jpg"

export default function Main() {
    return (
        <main>
            <section className="first--section">
                <div>
                    <h1 style={{marginBottom: "30px"}}>Next generation digital banking</h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className="first--btn">Request Invite</button>
                </div>
                <img alt="hero" src={hero}/>
            </section>
            <section className="second--section">
                <div className="second--section--top">
                    <h2 style={{marginBottom: "25px"}}>Why choose Easybank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub.<br/> Control 
                        your finances like never before.
                    </p>
                </div>
                <div className="second--section--bottom">
                    <div>
                        <img src={online} style={{marginBottom: "30px"}} alt="online banking vector imaage"/>
                        <h3 style={{marginBottom: "20px"}}>Online Banking</h3>
                        <p>
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </p>
                    </div>
                    <div>
                        <img src={budget} style={{marginBottom: "30px"}} alt="online banking vector imaage"/>
                        <h3 style={{marginBottom: "20px"}}>Simple Budget</h3>
                        <p>
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>
                    </div>
                    <div>
                        <img src={onboard} style={{marginBottom: "30px"}} alt="online banking vector imaage"/>
                        <h3 style={{marginBottom: "20px"}}>Fast Onboarding</h3>
                        <p>
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </p>
                    </div>
                    <div>
                        <img src={api} style={{marginBottom: "30px"}} alt="online banking vector imaage"/>
                        <h3 style={{marginBottom: "20px"}}>Open API</h3>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </p>
                    </div>
                </div>
            </section>
            <section className="third--section">
                <h2 style={{marginBottom: "50px"}}>Latest Articles</h2>
                <div>
                    <div className="blog--box">
                        <img src={currency} alt="blog post"/>
                        <div>
                            <p className="writer">By Claire Robinson</p>
                            <h4>Receive money in any currency with no fees</h4>
                            <p className="blog--text">
                                The world is getting smaller and we’re becoming more mobile. So why should you be 
                                forced to only receive money in a single …
                            </p>
                        </div>
                    </div>
                    <div className="blog--box">
                        <img src={food} alt="blog post"/>
                        <div>
                            <p className="writer">By Wilson Hutton</p>
                            <h4>Treat yourself without worrying about money</h4>
                            <p className="blog--text">
                                Our simple budgeting feature allows you to separate out your spending and set 
                                realistic limits each month. That means you …
                            </p>
                        </div>
                    </div>
                    <div className="blog--box">
                        <img src={plane} alt="blog post"/>
                        <div>
                            <p className="writer">By Wilson Hutton</p>
                            <h4>Take your Easybank card wherever you go</h4>
                            <p className="blog--text">
                                We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                                while you’re abroad. We’ll even show you …
                            </p>
                        </div>
                    </div>
                    <div className="blog--box">
                        <img src={confetti} alt="blog post"/>
                        <div>
                            <p className="writer">By Claire Robinson</p>
                            <h4>Our invite-only Beta accounts are now live!</h4>
                            <p className="blog--text">
                                After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                                It’s easy to request an invite through the site ...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}