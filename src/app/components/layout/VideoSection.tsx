import React from "react";
import { FaPlay } from "react-icons/fa";
import Container from "../containers/Container";

const VideoSection = () => {
  return (
    <Container>
      <div className="mb-[4rem]">
        <div className="bg-orange-800 relative aspect-video flex justify-center items-center overflow-hidden">
          <img
            className=" absolute object-cover w-full h-full"
            src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_video_1100x.png?v=1637108281"
            alt=""
          />
          <div className="relative cursor-pointer w-[5rem] md:w-[8rem] bg-white aspect-square rounded-full flex justify-center items-center ">
            <FaPlay className="text-[1.5rem] md:text-[3rem]" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VideoSection;
