import React from "react";
import './home.css'

const Home = () => {
    const resetBackground = () => {
        document.body.style.backgroundImage = 'url("https://fossbytes.com/wp-content/uploads/2022/06/spy-x-family-anya-smug-1024x576.jpg")'
      }
    return (
        <div className='home'>
            {resetBackground()}
            <h1>
                Home page
            </h1>
        </div>
    )
}

export default Home;