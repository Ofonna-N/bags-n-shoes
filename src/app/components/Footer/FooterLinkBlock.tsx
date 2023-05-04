import React from "react";

type Props = {
  title: string;
  links: string[];
};

const FooterLinkBlock: React.FC<Props> = ({ title, links }) => {
  return (
    <div className="inline-block align-top w-full mb-[2rem] md:w-[33%]">
      <h3 className="text-[2rem] mb-[1.3rem]">{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link} className="mb-[1rem] text-[1.6rem]">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkBlock;
