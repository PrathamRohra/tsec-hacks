import React from "react";
import { FcLike } from 'react-icons/fc'
import { MdInsertComment } from 'react-icons/md'
import { ImShare } from 'react-icons/im'
import "./videodesc.css";

export default function VideoDesc({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-desc">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <span style={{ color: "white" }} className='video-span'>
            Follow
          </span>
        </h3>
      </div>

      <div className="video-desc-buttons">
        <div className="video-flex-box">
          <FcLike />
          {likes}
        </div>

        <div className="video-flex-box">
          <MdInsertComment />
          {comment}
        </div>

        <div className="video-flex-box">
          <ImShare />
          {shares}
        </div>
      </div>
    </div>
  );
}
