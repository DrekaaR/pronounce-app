import appstoreImage from "assets/images/markets/appstore.png";
import playMarketImage from "assets/images/markets/play.png";
import s from "./StoresButtons.module.scss";
import React from "react";

const StoresButtons = (props) => {
  return (
    <div className={props.isBlock ? s.storesBlock : s.stores}>
      <a
        href="link"
        target="_blank"
        className={s.storesItem}
        onClick={() => {
          props.ga.send({
            hitType: "pageview",
            page: "/playmarket",
            title: "Play market button click",
          });
          props.ga.event({
            category: "‘gotoplaystore’",
            action: "‘gotoplaystore’",
            label: "play market button click",
          });
        }}
      >
        <img src={playMarketImage} alt="play market" />
      </a>
      <a disabled target="_blank" className={s.storesItem}>
        <img src={appstoreImage} alt="appstore" />
      </a>
    </div>
  );
};

export default StoresButtons;
