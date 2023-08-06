import React from "react";
import "./Homepage.css"; // Import your CSS file for styling

const HomePage = () => {
    const playMusic = () => {
        var music = new Audio('./src/sunflower.mp3');
        music.play();
    };

    return (
        <div className="wrapper-hp">
            <div className="gap-head"></div>
            <div className="about-container">
                <div className="image-container">
                    <img className="img-img" />
                </div>

                <div className="text-container">
                    <h1>Chill place</h1>
                    <p>Dear customers, <br></br>

We know life can be challenging, leaving you tired and stressed. Our website is here to help you cope and find relief.

With tailored resources and support, we aim to be your sanctuary in times of need.

You're not alone on this journey. Let's find solace together.

Welcome to our website. <br></br>

Best regards, <br></br>XPT</p>
                    <div className="gap-head"></div>
                    <input type="button" value="Play Music" onClick={playMusic} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
