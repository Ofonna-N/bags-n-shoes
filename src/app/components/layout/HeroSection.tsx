import Link from "next/link";
import React from "react";
import Container from "../containers/Container";

const HeroSection = () => {
  return (
    <div className="bg-slate-800 relative h-[39rem] text-white  text-center flex flex-col justify-center md:h-[72rem]">
      {/* Hero Images */}
      <div className="absolute top-0 right-0 bg-slate-500 flex  w-full h-full">
        <div className="bg-slate-700 grow">Left Img</div>
        <div className="bg-slate-800 grow">Right Img</div>
      </div>
      {/* Hero texts and cta */}
      <Container>
        <div className="relative flex flex-col justify-center gap-8 items-center">
          <h1 className="text-[3.6rem] lg:text-[6.2rem]">
            Industrial design meets fashion.
          </h1>
          <h3 className="text-[1.5rem]">Atypical leather goods</h3>
          <Link
            href={"/productslisting"}
            className="text-white text-[1.8rem] border border-white px-[3rem] py-[1rem]"
          >
            Shop now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
