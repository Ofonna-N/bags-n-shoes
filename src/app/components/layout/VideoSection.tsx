import React from "react";
import { FaPlay } from "react-icons/fa";
import Container from "../containers/Container";

const VideoSection = () => {
  return (
    <Container>
      <div className="mb-[4rem]">
        <div className="bg-orange-800 aspect-video flex justify-center items-center">
          <div className="w-[5rem] md:w-[8rem] bg-white aspect-square rounded-full flex justify-center items-center ">
            <FaPlay className="text-[1.5rem] md:text-[3rem]" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VideoSection;
