import React, { useRef, useEffect, useState } from "react";
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
      const evo_ref = useRef();
      const ui_ref = useRef();
      const digfor_ref = useRef();
      const mining_ref = useRef();
      const [evoVis, setEvoVis] = useState(false);
      const [uiVis, setUiVis] = useState(false);
      const [digforVis, setDigforVis] = useState(false);
      const [miningVis, setMiningVis] = useState(false);
      useEffect(() => {
        const evo_observer = new IntersectionObserver((entries) => {
          entries.forEach(function (entry) {
            setEvoVis(entry.isIntersecting)
          })
        })
        const ui_observer = new IntersectionObserver((entries) => {
          entries.forEach(function (entry) {
            setUiVis(entry.isIntersecting)
          })
        })
        const digfor_observer = new IntersectionObserver((entries) => {
          entries.forEach(function (entry) {
            setDigforVis(entry.isIntersecting)
          })
        })
        const mining_observer = new IntersectionObserver((entries) => {
          entries.forEach(function (entry) {
            setMiningVis(entry.isIntersecting)
          })
        })
        evo_observer.observe(evo_ref.current)
        ui_observer.observe(ui_ref.current)
        digfor_observer.observe(digfor_ref.current)
        mining_observer.observe(mining_ref.current)
      }, [])
      useEffect(() => {
        AOS.init({duration: 1500});
      }, [])

    return (
        <div className="about">
            {resetBackground()}
            <div className="bio-container">
              <div className="bio-image-container">
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
              <div ref={evo_ref} className="interest">
                <h2>Evolutionary Algorithms</h2>
                <p className={evoVis ? "interest-active" : ""}>{strings.evo_alg}</p>
              </div>
              
              <div className="interest">
                <h2>Game Development</h2>
                <p className={evoVis ? "interest-active" : ""}>{strings.game_dev}</p>
              </div>

              <div ref={ui_ref} className="interest">
                <h2>UI Development</h2>
                <p className={uiVis ? "interest-active" : ""}>{strings.ui_dev}</p>
              </div>

              <div ref={digfor_ref} className="interest">
                <h2>Digital Forensics</h2>
                <p className={digforVis ? "interest-active" : ""}>{strings.dig_for}</p>
              </div>
              
              <div ref={mining_ref} className="interest">
                <h2>Data Mining</h2>
                <p className={miningVis ? "interest-active" : ""}>{strings.mining}</p>
              </div>
              
              <div className="interest">
                <h2>Cryptography</h2>
                <p className={miningVis ? "interest-active" : ""}>{strings.crypto}</p>
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
                  <iframe className="project-pdf" src="./image/CS5402_HW7_RyanMaxwell_SaulLynn.pdf" title="Data Mining Report"/>
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
                  <span className="site-repo">
                    <p><button className="repo" href="#" onClick = {() => openInNewTab('https://tinyurl.com/2p8depz8')}>Project Seraph</button></p>
                    <p><button className="repo" href="#" onClick = {() => openInNewTab('https://tinyurl.com/mbhxhap9')}>Repository</button></p>
                  </span>
                </div>
              </div>

            </div>

            <h2>Resume</h2>
            <iframe className="resume" src="./image/resume.pdf" title="resume"/>
        </div>
    )
}

export default About;