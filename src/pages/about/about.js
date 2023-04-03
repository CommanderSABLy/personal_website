import React, { useRef, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../App.css"
const strings = require("./about.json")

const About = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
      const intersect_ref = useRef();
      const [isVisible, setIsVisible] = useState(false)
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0]
          setIsVisible(entry.isIntersecting)
        })
        observer.observe(intersect_ref.current)
      }, [])
      useEffect(() => {
        AOS.init({duration: 1500});
      }, [])

    return (
        <div className="about">
            {resetBackground()}
            <div className="bio-container">
              <div className="bio-image-container">
                <h1>Saul Michael Lynn</h1>
                <img className="bio-image" src="image/grad_stage.jpg" alt="Saul on stage at graduation" draggable="false" />
              </div>
              <div className="bio">
                <h2>Brief Bio</h2>
                <p>{strings.bio}</p>
              </div>
              <div className="ycs">
                <h2>Why Computer Science?</h2>
                <p>{strings.why_cs}</p>
              </div>
              <div className="yh">
                <h2>Why History?</h2>
                <p>{strings.why_hist}</p>
              </div>
            </div>
            
            <h1>Computer Science Interests</h1>
            <div className="interest-container">
              <div className="interest">
                <h2>Evolutionary Algorithms</h2>
                <p className={isVisible ? "interest-active" : ""}>{strings.evo_alg}</p>
              </div>
              
              <div className="interest">
                <h2>Game Development</h2>
                <p className={isVisible ? "interest-active" : ""}>{strings.game_dev}</p>
              </div>

              <div className="interest">
                <h2>UI Development</h2>
                <p ref={intersect_ref} className={isVisible ? "interest-active" : ""}>{strings.ui_dev}</p>
              </div>

              <div className="interest">
                <h2>Digital Forensics</h2>
                <p className={isVisible ? "interest-active" : ""}>{strings.dig_for}</p>
              </div>
              
              <div className="interest">
                <h2>Data Mining</h2>
                <p className={isVisible ? "interest-active" : ""}>{strings.mining}</p>
              </div>
              
              <div className="interest">
                <h2>Cryptography</h2>
                <p className={isVisible ? "interest-active" : ""}>{strings.crypto}</p>
              </div>
            </div>

            <h1>Projects</h1>
            <div className="project-container">
              <div className="project" data-aos="fade-right">
                <div className="project-text">
                  <h2>Evolutionary Keyboard Layout Generator</h2>
                  <p>{strings.evo_key}</p>
                </div>
                <div className="project-visual">
                  <img className="project-image" src="image/evolutionary_keyboard.jpg" alt="Evolutionary Keyboard Output" draggable="false" />
                  <button className="repo" href="#" onClick = {() => openInNewTab('https://tinyurl.com/2wvz8bvy/')}>Repository</button>
                </div>
              </div>
              
              <div className="project" data-aos="fade-left">
                <div className="project-text">
                  <h2>Data Mining Group Project</h2>
                  <p>{strings.data_mine}</p>
                </div>
                <div className="project-visual">
                  <iframe src="./image/CS5402_HW7_RyanMaxwell_SaulLynn.pdf" height={!isMobile ? "550" : "50vw"} width={!isMobile ? "425" : "50vw"} title="Data Mining Report"/>
                </div>
              </div>
              
              <div className="project" data-aos="fade-right">
                <div className="project-text">
                  <h2>Psychology Scales Assessment Tool</h2>
                  <p>{strings.psych}</p>
                </div>
                <div className="project-visual">
                  <img className="project-image" src="image/psych_scales.jpg" alt="Psych Scales Menu" draggable="false" />
                  <p><button className="repo" href="#" onClick = {() => openInNewTab('https://tinyurl.com/2p96k8rc')}>Repository</button></p>
                </div>
              </div>

              <div className="project" data-aos="fade-left">
                <div className="project-text">
                  <h2>Fizzbuzz</h2>
                  <p>{strings.fizzbuzz}</p>
                </div>
                <div className="project-visual">
                  <img className="project-image" src="image/csharp_fizzbuzz_output.jpg" alt="Output for my implementation of FizzBuzz in C#" draggable="false" />
                  <p><button className="repo" href="#" onClick = {() => openInNewTab('https://tinyurl.com/3fcuux5x')}>Repository</button></p>
                </div>
              </div>
              
              <div className="project" data-aos="fade-up">
                <div className="project-text">
                  <h2>Unity</h2>
                  <p>{strings.unity}</p>
                </div>
                <div className="project-visual">
                  <h1><i className="fab fa-unity"></i></h1>
                  <p><button className="repo" href="#" onClick = {() => openInNewTab('https://tinyurl.com/3fcuux5x')}>Repository</button></p>
                </div>
              </div>

            </div>

            <h2>Resume</h2>
            <iframe className="resume" src="./image/resume.pdf" title="resume"/>
        </div>
    )
}

export default About;