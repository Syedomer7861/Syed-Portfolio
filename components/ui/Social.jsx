import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaCodepen,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Syedomer7861" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/syed-omer-farrukh-217607155/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/web_world7861/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/syedomerfarrukh/" },
  { icon: <FaCodepen />, path: "https://codepen.io/syed-omer-farrukh" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
