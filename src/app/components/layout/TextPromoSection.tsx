import React from "react";
import Container from "../containers/Container";
import Image from "next/image";

const TextPromoSection = () => {
  const Text = (props: { imgSrc: string; content: string }) => (
    <div className="mb-[3rem]">
      <div className="w-[17rem] mx-auto mb-[1rem]">
        <Image
          src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_Refinery_logo_710x.png?v=1637108436"
          width={300}
          height={100}
          alt=""
        />
      </div>
      <p className="text-center px-[3rem] text-[1.6rem]">
        &quot;The leather is sourced from environmentally friendly tanneries in
        Italy, France, and Turkey, where Rure is based and everything is
        assembled by hand.&quot;
      </p>
    </div>
  );
  return (
    <Container>
      <div className="flex flex-col mb-[10rem] md:flex-row ">
        <Text
          imgSrc="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_Refinery_logo_710x.png?v=1637108436"
          content="The leather is sourced from environmentally friendly tanneries in
        Italy, France, and Turkey, where Rure is based and everything is
        assembled by hand."
        />
        <Text
          imgSrc="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_Refinery_logo_710x.png?v=1637108436"
          content="The leather is sourced from environmentally friendly tanneries in
        Italy, France, and Turkey, where Rure is based and everything is
        assembled by hand."
        />
      </div>
    </Container>
  );
};

export default TextPromoSection;
