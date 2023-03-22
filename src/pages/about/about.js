import React from "react";
import { Link } from 'react-router-dom';
const strings = require("./about.json")

const About = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
    return (
        <div>
            {resetBackground()}
            <h1>tldr</h1>
            <p>{strings.tldr}</p>
            
            <h1>Why Computer Science?</h1>
            <p>{strings.why_cs}</p>
            
            <h1>Why History?</h1>
            <p>{strings.why_hist}</p>
            
            <h1>Computer Science Interests</h1>
            <h2>Evolutionary Algorithms</h2>
            <p>{strings.evo_alg}</p>
            
            <h2>Game Development</h2>
            <p>{strings.game_dev}</p>
            
            <h2>UI Development</h2>
            <p>{strings.ui_dev}</p>
            
            <h2>Digital Forensics</h2>
            <p>{strings.dig_for}</p>
            
            <h2>Data Mining</h2>
            <p>{strings.mining}</p>
            
            <h2>Cryptography</h2>
            <p>{strings.crypto}</p>
            
            <h1>Projects</h1>
            
            <h2>Evolutionary Keyboard Layout Generator</h2>
            <p>{strings.evo_key}</p>
            <p><Link href="#" onClick = {() => openInNewTab('https://tinyurl.com/2wvz8bvy/')}>Repository</Link></p>
            
            <h2>Data Mining Group Project</h2>
            <p>{strings.data_mine}</p>
            <iframe src="./image/CS5402_HW7_RyanMaxwell_SaulLynn.pdf" height="550" width="425" title="resume"/>
            
            <h2>Psychology Scales Assessment Tool</h2>
            <p>{strings.psych}</p>
            <p><Link href="#" onClick = {() => openInNewTab('https://tinyurl.com/2p96k8rc')}>Repository</Link></p>
            
            <h2>Fizzbuzz</h2>
            <p>{strings.fizzbuzz}</p>
            <p><Link href="#" onClick = {() => openInNewTab('https://tinyurl.com/3fcuux5x')}>Repository</Link></p>
            
            <h2>Unity</h2>
            <p>{strings.unity}</p>

            <h2>Resume</h2>
            <iframe src="./image/resume.pdf" height="550" width="850" title="resume"/>
        </div>
    )
}

export default About;