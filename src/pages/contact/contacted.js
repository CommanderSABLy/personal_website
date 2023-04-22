import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css"

const Contacted = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
    return (
        <div className="contact-container">
            <div className="container mt-5">
                {resetBackground()}
                <div className="contact">
                    <h1>Contact Me</h1>
                    <h3>Email</h3>
                    <h4><Link className="linker" href="#" onClick = {() => openInNewTab('mailto:saullynn.lynn@gmail.com')}>saullynn.lynn@gmail.com</Link></h4>
                    <h3><Link className="linker" href="#" onClick = {() => openInNewTab('https://www.linkedin.com/in/saul-lynn/')}><i className="fa-brands fa-linkedin"/> LinkedIn</Link></h3>
                    <h3><Link className="linker" href="#" onClick = {() => openInNewTab('https://tinyurl.com/mr2uevja')}><i className="fa-brands fa-github"/> GitHub</Link></h3>
                    <h3>Contact Me Directly</h3>
                </div>
                <h4>Your message has been sent. Thank you!</h4>
            </div>
        </div>
    )
}

export default Contacted;