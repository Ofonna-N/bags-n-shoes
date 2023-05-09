import Link from "next/link";
import React from "react";
import Container from "../containers/Container";

const HeroSection = () => {
  return (
    <div className="bg-slate-800 relative h-[39rem] text-white  text-center flex flex-col justify-center md:h-[72rem]">
      {/* Hero Images */}
      <div className="absolute top-0 right-0 bg-slate-500 flex  w-full h-full overflow-hidden">
        <div className="bg-slate-700 relative w-full after:content-[''] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:opacity-[0.35]">
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/141569803_417219312901458_4638470652865432174_n.jpg?v=1637107084"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="bg-slate-800 relative w-full after:content-[''] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:opacity-[0.35]">
          <img
            src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_1100x.jpg?v=1637107315"
            className="absolute w-full h-full object-cover"
            alt=""
          />
        </div>
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
            className="text-white text-[1.8rem] border border-white px-[3rem] py-[1rem]  hover:outline"
          >
            Shop now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
