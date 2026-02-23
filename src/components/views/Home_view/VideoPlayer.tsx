"use client";
import React from "react";

function VideoPlayer() {
  return (
    <div className=" w-screen lg:w-full">
      <div className="bg-black flex  opacity-60   justify-center items-center w-full h-[300px] xl:h-screen 2xl:h-screen   ">
        <video
          loop
          src={
            "https://res.cloudinary.com/dlmjx1uwj/video/upload/v1732368069/y2mate.com_-_BRT_Bus_terminal_abuleegba_Lagos_Nigeria_v720P_online-video-cutter.com_wvmaeu.mp4"
          }
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover opacity-40"
        ></video>
      </div>
    </div>
  );
}

export default VideoPlayer;
