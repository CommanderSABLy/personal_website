import React from "react";
import './gallery.css';

const Gallery = () => {
    document.body.style.backgroundImage = "none";

    if (window.location.pathname === '/gallery') {
        const track = document.getElementById("image-track");
    
        if(typeof(track) != "undefined" && track != null) {
            window.onmousedown = e => {
                track.dataset.mouseDownAt = e.clientX;
            }
        
            window.onmouseup = () => {
                track.dataset.mouseDownAt = "0";
                track.dataset.prevPercentage = track.dataset.percentage;
            }
        
            window.onmousemove = e => {
                if(track.dataset.mouseDownAt === "0") return;
        
                var mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                    maxDelta = window.innerWidth / 2;
                
                var percentage = (mouseDelta / maxDelta) * -100,
                    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
                
                
                track.dataset.percentage = nextPercentage;
        
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
    }
    const imgs = document.querySelectorAll('#image-track > .image');
    const fullPage = document.querySelector('#fullpage');

    imgs.forEach(img => {
        img.addEventListener('click', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
        })
    })
    fullPage.addEventListener('click', function() {
        fullPage.style.backgroundImage = 'none';
        fullPage.style.display = 'none';
    })

    return (
        <div>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                <img class="image" src="image/gallery/usgrant.jpg" draggable="false" />
                <img class="image" src="image/gallery/eee.jpg" draggable="false" />
                <img class="image" src="image/gallery/hiroshimashadow.jpg" draggable="false" />
                <img class="image" src="image/gallery/britishpara.jpg" draggable="false" />
                <img class="image" src="image/gallery/thirdmarines.jpg" draggable="false" />
                <img class="image" src="image/gallery/mustang.jpg" draggable="false" />
                <img class="image" src="image/gallery/smokescreen.jpg" draggable="false" />
                <img class="image" src="image/gallery/victory.jpg" draggable="false" />
            </div>
            <div id="fullpage"></div>
        </div>
    )
}

export default Gallery;