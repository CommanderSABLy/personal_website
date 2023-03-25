import React, { useEffect } from "react";
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const strings = require("./recommend.json");

const Recommend = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'none'
      }
      useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

    return (
        <div className="recommendation_container">
            {resetBackground()}

            <h1>Get to know me</h1>
            <p>One of the best ways to get to know someone is by finding out the kinds of things they like. Here are some of the things I liked enough to tell you to try it</p>
            <div className="filler"></div>
           
            
            <h1>
                Books
            </h1>
            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/7/74/The_Last_Stand_of_the_Tin_Can_Sailors.jpg" draggable="false" />
                </div>
                <div className="title_author">
                    <h2><i>{strings.tincan_title}</i></h2>
                    <h3>{strings.tincan_author}</h3>
                </div>
                <div className="rec">
                    <p>{strings.tincan_rec}</p>
                </div>
            </div>
            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg" draggable="false" /> 
                </div>
                <div className="title_author">
                    <h2><i>{strings.f451_title}</i></h2>
                    <h3>{strings.f451_author}</h3>
                </div>
                <div className="rec">
                    <p>{strings.f451_rec}</p>
                </div>
            </div>
            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://img1.od-cdn.com/ImageType-400/0887-1/C06/900/3F/%7BC069003F-5DC4-4532-86A5-8CB6C4D6C4FF%7DImg400.jpg" draggable="false" />
                </div>
                <div className="title_author">
                    <h2><i>{strings.mcmanus_title}</i></h2>
                    <h3>{strings.mcmanus_auth}</h3>
                </div>
                <div className="rec">
                    <p>{strings.mcmanus_rec}</p>
                </div>
            </div>
            
            <h1>
                Games
            </h1>

            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/3/34/Fallout_New_Vegas.jpg" draggable="false" />
                </div>
                <div className="title_author">
                    <h2><i>{strings.fnv_title}</i></h2>
                    <h3>{strings.fnv_studio}</h3>
                </div>

                <div className="rec">
                    <p>{strings.fnv_rec}</p>
                </div>
            </div>
            
            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/d/de/Jak_X_-_Combat_Racing_Coverart.png" draggable="false" />
                </div>
                <div className="title_author">
                    <h2><i>{strings.jakx_title}</i></h2>
                    <h3>{strings.jakx_studio}</h3>
                </div>

                <div className="rec">
                    <p>{strings.jakx_rec1} <i>{strings.jak_title}</i> {strings.jakx_rec2}</p>
                </div>
            </div>
            
            <h1>
                Films and TV
            </h1>
            
            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVjj_nwRuOB4njCwgFGPHO2ZhhImRZu8Z7sYxhVz-o6cIl3uiG" draggable="false" />
                </div>
                <div className="title_author">
                    <h2>HBO's <i>{strings.tlouhbo_title}</i></h2>
                    <h3>{strings.tlouhbo_creators}</h3>
                </div>
                <div className="rec">
                    <p>{strings.tlouhbo_rec}</p>
                </div>
            </div>

            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png" draggable="false" />
                </div>
                <div className="title_author">
                    <h2><i>{strings.fmab_title}</i></h2>
                    <h3>{strings.fmab_author}</h3>
                </div>
                <div className="rec">
                    <p>{strings.fmab_rec}</p>
                </div>
            </div>
        </div>
    )
}

export default Recommend;