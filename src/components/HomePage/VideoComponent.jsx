import React, { useState, useRef, useEffect } from "react";
import classes from "./HomePage.module.css";
import image from "../../assets/images/pause.png";

const VideoComponent = ({ videoUrl }) => {
  const [pause, setPause] = useState(false);
  const videoRef = useRef(null);

  const pauseButtonHandle = () => {
    setPause((prevPause) => !prevPause);
    if (!pause) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    setPause(true);
  }, []);

  return (
    <>
      <div className={classes.vcContainer}>
        {/* <button onClick={pauseButtonHandle}>
          <img src={image} alt="pause" />
        </button> */}
        <span
          className={classes.vOverlay}
          style={{ display: pause ? "block" : "none" }}
        ></span>
        <video ref={videoRef} controls className={classes.vcContent}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoComponent;
