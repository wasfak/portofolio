import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/your-profile" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/your-profile" },
    { icon: <FaYoutube />, path: "https://youtube.com/your-channel" },
    { icon: <FaTwitter />, path: "https://twitter.com/your-profile" },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} className={iconStyles} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
