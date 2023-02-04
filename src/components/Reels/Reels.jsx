import React from "react";
import Video from "../Video/Video";
import Logo from "../navbar/logo.png";

import "./reels.css";

import Vid1 from '../../videos/vid1.mp4'
import Vid2 from '../../videos/vid2.mp4'
import Vid3 from '../../videos/vid3.mp4'

const data = [
   {
      channel: "Best Homes",
      song: "Matunga",
      url: Vid1,
      likes: "32",
      comment: "12",
      shares: "3",
   },
   {
      channel: "Bungalow",
      song: "Bandra",
      url: Vid2,
      likes: "22",
      comment: "21",
      shares: "12",
   },
   {
      channel: "Flats",
      song: "Dadar",
      url: Vid3,
      likes: "89",
      comment: "23",
      shares: "9",
   },
];

function Reels() {
   return (
      <div className="Reels">
         <center>
            <div className="reels-logo">
               <img alt="logo" src={Logo} className="reel-logo" />
            </div>
            <h3>Feeds</h3>
            <div className="video-container" id="video-container">

               {data.map((props, index) => (
                  <Video
                     key={index}
                     channel={props.channel}
                     song={props.song}
                     url={props.url}
                     likes={props.likes}
                     comment={props.comment}
                     shares={props.shares}
                  />
               ))}

            </div>
         </center>
      </div>
   );
}

export default Reels;