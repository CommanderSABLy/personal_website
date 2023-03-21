import React, { useState } from "react";

const Contact = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
    return (
        <div class="container mt-5">
            {resetBackground()}
            <h1>Contact Me</h1>
            <h3>Email</h3>
            <h4>saullynn.lynn@gmail.com</h4>
            <h3>LinkedIn</h3>
            <h3>GitHub</h3>
            <h3>Contact Me Directly</h3>
            <form class="row g-3" action="https://formsubmit.co/" method="POST">
                <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name*</label>
                    <input type="text" class="form-control" name="name" id="firstName" required />
                </div>
                <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name*</label>
                    <input type="text" class="form-control" name="Last Name" id="lastName" required />
                </div>
                <div class="col-md-8">
                    <label for="emailInfo" class="form-label">Email*</label>
                    <input type="email" class="form-control" name="email" id="emailInfo" required />
                </div>
                <div class="col-md-4">
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" name="phone" id="phoneNumber" placeholder="+1 (555) 555-5555"/>
                </div>
                <div class="col-md-12">
                    <label for="message" class="form-label">Message*</label>
                    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;