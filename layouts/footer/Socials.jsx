import s from "layouts/footer/Footer.module.scss";
import React from 'react';
import { ReactComponent as FacebookIcon } from "assets/images/icons/socials/facebook.svg"
import { ReactComponent as InstagramIcon } from "assets/images/icons/socials/inst.svg"
import { ReactComponent as TwitterIcon } from "assets/images/icons/socials/twitter.svg"
import { ReactComponent as YoutubeIcon } from "assets/images/icons/socials/youtube.svg"

const socialsMap = [
  {
    name: "twitter",
    link: "link",
    icon: <TwitterIcon />
  },
]

const Socials = () => {
  return (
    <div className={s.socials}>
      {socialsMap.map(social =>
        <a
          key={social.name}
          href={social.link}
          target="_blank"
        >
          {social.icon}
        </a>
      )}
    </div>
  );
};

export default Socials;