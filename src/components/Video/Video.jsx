import React, { useRef, useState, useEffect } from "react";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import CameraAltIcon from "@material-ui/icons/CameraAlt";

import VideoDesc from "../VideoDesc/VideoDesc";

import "./video.css";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <div className="video-header">
        {/* <ArrowBackIosIcon /> */}
        <h3>Reel</h3>
        {/* <CameraAltIcon /> */}
      </div>
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
      />
      <VideoDesc
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}
