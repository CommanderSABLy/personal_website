import React from "react";
import '../../App.css';
import { useState } from 'react';

const Gallery = () => {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [fullScreen, setFullScreen] = useState(false);
    document.body.style.backgroundImage = "none";

    if (window.location.pathname === '/gallery') {
        const track = document.getElementById("image-track");
    
        window.onmousedown = e => {
            setMouseDownAt(e.clientX);
        }
    
        window.onmouseup = () => {
            setMouseDownAt(0);
            setPrevPercentage(percentage);
            if(fullScreen) {
                fullPage.style.backgroundImage = 'none';
                fullPage.style.display = 'none';
                setFullScreen(false);
            }
        }
    
        window.onmousemove = e => {
            if(mouseDownAt === 0) return;
    
            var mouseDelta = mouseDownAt - e.clientX,
                maxDelta = window.innerWidth / 2;
            
            var percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = prevPercentage + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
            
            
            setPercentage(nextPercentage);
    
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });
    
            for(const image of track.getElementsByClassName("image")) {
                image.animate({
                objectPosition: `${nextPercentage + 100}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }
    }
    const imgs = document.querySelectorAll('#image-track > .image');
    const fullPage = document.querySelector('#fullpage');

    imgs.forEach(img => {
        img.addEventListener('dblclick', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
            setFullScreen(true);
        })
    })

    return (
        <div>
            <div className="header-container">
                <h1>Arya, German Shepherd, Born May 1 2018</h1>
            </div>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                <img className="image" src="image/gallery/youngarya.jpg" alt="Young Arya" draggable="false" />
                <img className="image" src="image/gallery/sleepdog.jpg" alt="Sleeping Dog" draggable="false" />
                <img className="image" src="image/gallery/washedoutgoofygirl.jpg" alt="Arya being goofy" draggable="false" />
                <img className="image" src="image/gallery/carya.jpg" alt="Arya in the back of the car at camp" draggable="false" />
                <img className="image" src="image/gallery/happyarya.jpg" alt="Happy Arya" draggable="false" />
                <img className="image" src="image/gallery/eastwoodarya.jpg" alt="Arya at my first rental" draggable="false" />
                <img className="image" src="image/gallery/dognap.jpg" alt="Arya taking a nap" draggable="false" />
                <img className="image" src="image/gallery/dogdisc.jpg" alt="Arya becoming a disc" draggable="false" />
                <img className="image" src="image/gallery/aryasbednow.jpg" alt="Arya claiming my bed" draggable="false" />
                <img className="image" src="image/gallery/aryasnow.jpg" alt="Arya's first snow" draggable="false" />
            </div>
            <div id="fullpage"></div>
        </div>
    )
}

export default Gallery;