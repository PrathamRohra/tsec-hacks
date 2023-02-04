import React from "react";
import { FcLike } from "react-icons/fc";
import { MdInsertComment } from "react-icons/md";
import { ImShare } from "react-icons/im";
import "./videodesc.css";

export default function VideoDesc({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-desc">
      <div className="video-text">
        <h3>
          <a
            className="links"
            href="https://www.google.com/search?q=flats+mumbai&tbm=isch&ved=2ahUKEwiVjJOHwvj8AhV--HMBHa6tCw0Q2-cCegQIABAA&oq=flats+mumbai&gs_lcp=CgNpbWcQAzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeOgQIIxAnOgUIABCABFDPDFidHGCWIGgAcAB4AIABdogBogWSAQMwLjaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=ro3cY5X9If7wz7sPrtuuaA&bih=731&biw=1326&rlz=1C1RXQR_enIN1021IN1021#imgrc=vIkqJN0Lo27pyM"
            target="_blank"
            rel="noreferrer"
          >
            Click here to talk with flat owner
          </a>
        </h3>
        <h3>
          {channel} . ({song})
          <span style={{ color: "white" }} className="video-span">
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
