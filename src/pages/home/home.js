import React from "react";
import { useNavigate } from "react-router";
import { BrowserView, MobileView } from "react-device-detect";
import '../../App.css'

const Home = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = "none";
      }

      const navigate = useNavigate();

      function handleClick(location) {
        navigate(location)
      }

    return (
        <div>
            <BrowserView>
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
            </BrowserView>
            <MobileView>
            <div className='home'>
                    {resetBackground()}
                    <div className="home-container">
                        <div>
                            <div className="about-box-mobile" onClick={() => handleClick('/about')} />
                            <h3>About</h3>
                        </div>
                        <div>
                            <div className="recommend-box-mobile" onClick={() => handleClick('/recommended-media')} />
                            <h3>Recommended Media</h3>
                        </div>
                        <div>
                            <div className="gallery-box-mobile" onClick={() => handleClick('/gallery')} />
                            <h3>Gallery</h3>
                        </div>
                    </div>
                    <div className="home-container">
                        <div>
                            <div className="scale-box-mobile" onClick={() => handleClick('/scales')} />
                            <h3>Scales</h3>
                        </div>
                        <div>
                            <div className="contact-box-mobile" onClick={() => handleClick('/contact')} />
                            <h3>Contact Me</h3>
                        </div>
                    </div>
                </div>
            </MobileView>
        </div>
    )
}

export default Home;