import React from "react";
import { useNavigate } from "react-router";
import './home.css'

const Home = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = "none";
      }

      const navigate = useNavigate();

      function handleClick(location) {
        navigate(location)
      }

    return (
        <div className='home'>
            {resetBackground()}
            <div className="home-container">
                <div className="about-box" onClick={() => handleClick('/about')}>
                    <div className="effect">
                        <h3>About</h3>
                        <p>Get to know Saul</p>
                    </div>
                </div>
                <div className="recommend-box" onClick={() => handleClick('/recommended-media')}>
                    <div className="effect">
                        <h3>Recommended Media</h3>
                        <p>Entertainment I enjoy and recommend for others</p>
                    </div>
                </div>
                <div className="gallery-box" onClick={() => handleClick('/gallery')}>
                    <div className="effect">
                        <h3>Gallery</h3>
                        <p>Photos I have taken</p>
                    </div>
                </div>
            </div>
                <div></div>
            <div className="home-container">
                <div className="scale-box" onClick={() => handleClick('/scales')}>
                    <div className="effect">
                        <h3>Scales</h3>
                        <p>Psychology Assessments:</p>
                        <p>Right Wing Authoritarian Scale, Modern Racism Scale, Symbolic Racism Scale</p>
                    </div>
                </div>
                <div className="contact-box" onClick={() => handleClick('/contact')}>
                    <div className="effect">
                        <h3>Contact Me</h3>
                        <p>Email me, find me on LinkedIn, or find me on GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;