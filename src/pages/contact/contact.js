import React from "react";
import { Link } from 'react-router-dom';

const Contact = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
    return (
        <div className="container mt-5">
            {resetBackground()}
            <h1>Contact Me</h1>
            <h3>Email</h3>
            <h4><Link href="#" onClick = {() => openInNewTab('mailto:saullynn.lynn@gmail.com')}>saullynn.lynn@gmail.com</Link></h4>
            <h3><Link href="#" onClick = {() => openInNewTab('https://www.linkedin.com/in/saul-lynn-a92576150/')}>LinkedIn</Link></h3>
            <h3><Link href="#" onClick = {() => openInNewTab('https://tinyurl.com/mr2uevja')}>GitHub</Link></h3>
            <h3>Contact Me Directly</h3>
            <form className="row g-3" action="https://formsubmit.co/" method="POST">
                <div className="col-md-6">
                    <label for="firstName" className="form-label">First Name*</label>
                    <input type="text" className="form-control" name="name" id="firstName" required />
                </div>
                <div className="col-md-6">
                    <label for="lastName" className="form-label">Last Name*</label>
                    <input type="text" className="form-control" name="Last Name" id="lastName" required />
                </div>
                <div className="col-md-8">
                    <label for="emailInfo" className="form-label">Email*</label>
                    <input type="email" className="form-control" name="email" id="emailInfo" required />
                </div>
                <div className="col-md-4">
                    <label for="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" name="phone" id="phoneNumber" placeholder="+1 (555) 555-5555"/>
                </div>
                <div className="col-md-12">
                    <label for="message" className="form-label">Message*</label>
                    <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;