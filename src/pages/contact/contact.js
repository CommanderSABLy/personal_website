import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css"

const Contact = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
    return (
        <div class="contact-container">
            <div className="container mt-5">
                {resetBackground()}
                <div className="contact">
                    <h1>Contact Me</h1>
                    <h3>Email</h3>
                    <h4><Link className="linker" href="#" onClick = {() => openInNewTab('mailto:saullynn.lynn@gmail.com')}>saullynn.lynn@gmail.com</Link></h4>
                    <h3><Link className="linker" href="#" onClick = {() => openInNewTab('https://www.linkedin.com/in/saul-lynn-a92576150/')}><i className="fa-brands fa-linkedin"/> LinkedIn</Link></h3>
                    <h3><Link className="linker" href="#" onClick = {() => openInNewTab('https://tinyurl.com/mr2uevja')}><i className="fa-brands fa-github"/> GitHub</Link></h3>
                    <h3>Contact Me Directly</h3>
                </div>
                <form className="row g-3" action="https://formsubmit.co/5ef92ad9a679167158bc88f4e7261b6f" method="POST">
                    <input type="text" name="_honey" style={{display: 'none'}}></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <div className="col-md-6">
                        <label for="firstName" className="form-label">First Name<span className="asterisk">*</span></label>
                        <input type="text" className="form-control" name="Name" id="firstName" placeholder="John" required />
                    </div>
                    <div className="col-md-6">
                        <label for="lastName" className="form-label">Last Name<span className="asterisk">*</span></label>
                        <input type="text" className="form-control" name="Surname" id="lastName" placeholder="Doe" required />
                    </div>
                    <div className="col-md-8">
                        <label for="emailInfo" className="form-label">Email<span className="asterisk">*</span></label>
                        <input type="email" className="form-control" name="email" id="emailInfo" placeholder="johndoe@joe.com" required />
                    </div>
                    <div className="col-md-4">
                        <label for="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name="phone" id="phoneNumber" placeholder="+1 (555) 555-5555"/>
                    </div>
                    <div className="col-md-12">
                        <label for="message" className="form-label">Message<span className="asterisk">*</span></label>
                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your message here." required></textarea>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;