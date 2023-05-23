import React from 'react';
import s from "components/Rating/Rating.module.scss"
import Container from "components/UI/Container/Container";

import starIcon from "assets/images/icons/joinBanner/01.svg"
import cupIcon from "assets/images/icons/joinBanner/01.svg"
import thumbIcon from "assets/images/icons/joinBanner/01.svg"
import appstoreImage from "assets/images/icons/appMarkets/appstore.svg";
import playMarketImage from "assets/images/icons/appMarkets/playmarket.svg";

const Rating = () => {
  return (
    <section className={s.join}>
      <Container>
        <div className={s.body}>

          <h2 className={s.title}>
            Join Millions of Users Speaking <br/> English More Confidently With Elsa
          </h2>

          <div className={s.items}>

            <article className={s.item}>
              <div className={s.icon}>
                <img src={starIcon} alt="star icon"/>
              </div>
              <h3 className={s.itemTitle}>4.7 Stars</h3>
              <div className={s.text}>Average rating</div>
            </article>

            <article className={s.item}>
              <div className={s.icon}>
                <img src={cupIcon} alt="cup icon"/>
              </div>
              <h3 className={s.itemTitle}>460K+ Rating</h3>
              <div className={s.text}>From satisfied users</div>
            </article>

            <article className={s.item}>
              <div className={s.icon}>
                <img src={thumbIcon} alt="thumb icon"/>
              </div>
              <h3 className={s.itemTitle}>18M+ Downloads</h3>
              <div className={s.text}>By Global Users</div>
            </article>


          </div>

          <div className={s.stores}>
            <a href="" className={s.storesItem}>
              <img src={appstoreImage} alt="appstore image"/>
            </a>
            <a href="" className={s.storesItem}>
              <img src={playMarketImage} alt="play market image"/>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Rating;