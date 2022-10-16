import React from "react"

function Content() {
    return (
        <div className="content">
            <h1 className="name">Daniel Blyakher</h1>
            <h3 className="title">Frontend Developer</h3>
            <h4 className="website">danielblyakher.website</h4>
            
            <div className="header--button-group">
                <button className="btn email">
                    <img src="./Images/Mail.svg" id="email-icon"/>
                    Email
                </button>
                <button className="btn linkedin">
                    <img src="./Images/linkedin.svg" id="linkedin-icon"/>
                    LinkedIn
                </button>
            </div>
            
            <div className="description">
                <h2 className="section-title">About</h2>
                <p className="section-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            
            <div className="interests">
                <h2 className="section-title">Interests</h2>
                <p className="section-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}

export default Content