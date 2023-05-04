import React from "react";
import Container from "../containers/Container";
import FooterLinkBlock from "./FooterLinkBlock";

const Footer = () => {
  return (
    <footer className="border-t py-[5rem]">
      <Container>
        <div>
          <FooterLinkBlock
            title="Quick links"
            links={["Bags", "Shoes", "Lookbook"]}
          />
          <FooterLinkBlock
            title="Info"
            links={["About us", "Contact us", "Shipping Policy", "Blog"]}
          />
          <FooterLinkBlock
            title="Our mission"
            links={[
              "Quality materials",
              "good designs",
              "craftsmanship and sustainability",
            ]}
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
