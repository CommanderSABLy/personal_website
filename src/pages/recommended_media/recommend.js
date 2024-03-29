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

            <div className="filler">
                <h3>Scroll to see what I recommend</h3>
                <div className="caret-container">
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                    <i className="fas fa-caret-down fa-beat-fade fa-2xl" />
                </div>
            </div>
           
            
            <h1>
                Books
            </h1>
            <div className="recommendation" data-aos="fade-right">
                <div className="rec_image_container">
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/7/74/The_Last_Stand_of_the_Tin_Can_Sailors.jpg" alt="The Last Stand of the Tin Can Sailors Cover" draggable="false" />
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
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg" alt="Fahrenheit 451 Cover" draggable="false" /> 
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
                    <img className="rec_image" src="https://img1.od-cdn.com/ImageType-400/0887-1/C06/900/3F/%7BC069003F-5DC4-4532-86A5-8CB6C4D6C4FF%7DImg400.jpg" alt="Hell Before Their Very Eyes Cover" draggable="false" />
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
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/3/34/Fallout_New_Vegas.jpg" alt="Fallout: New Vegas Cover" draggable="false" />
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
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/d/de/Jak_X_-_Combat_Racing_Coverart.png" alt="Jak X Combat Racing Cover" draggable="false" />
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
                    <img className="rec_image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVjj_nwRuOB4njCwgFGPHO2ZhhImRZu8Z7sYxhVz-o6cIl3uiG" alt="HBO's The Last of Us Poster" draggable="false" />
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
                    <img className="rec_image" src="https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png" alt="Fullmetal Alchemist Brotherhood Poster" draggable="false" />
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