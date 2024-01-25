import React from "react";

export default function Info() {
    return(
        <div className="info-content">
            <img className="info-image" src="../images/selfie.jpeg" alt="Selfie"/>
            <h1>Sem Rodenburg</h1>
            <h2>Frontend Developer</h2>
            <h3>semrodenburg.nl</h3>
            <div className="buttons">
                <button className="email-btn" type="button">
                    <img src="../images/email-icon.png" alt="email icon"/>
                    Email
                </button>
                <button className="linkedin-btn" type="button">
                    <img src="../images/linkedin-icon.png" alt="linkedin icon"/>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}