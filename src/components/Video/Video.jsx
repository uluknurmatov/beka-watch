import React from "react";
import Video from "../../assets/img/video.mp4";
import "./Video.css";

const MainVideo = () => {
    return (
        <div className="video">
            <div class="fullscreen-bg">
                <div class="overlay">
                    <div class="welcome">
                        <h1>
                            TISSOT PR100 <br />
                            CHRONOGRAPH
                        </h1>
                        <button class="btn-welcome">Купить</button>
                    </div>
                </div>
                <video
                    loop="loop"
                    muted="muted"
                    autoPlay="autoplay"
                    poster="video/plane.jpg"
                    className="fullscreen-bg__video"
                >
                    <source src={Video} type="video/mp4" />
                </video>{" "}
            </div>{" "}
        </div>
    );
};

export default MainVideo;
