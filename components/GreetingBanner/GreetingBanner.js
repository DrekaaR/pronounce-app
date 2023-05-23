import illustration from "assets/images/mainblock/illustration.webp";
import s from "components/GreetingBanner/GreetingBanner.module.scss";
import Container from "components/UI/Container/Container";
import { WordContext } from "context";
import React, { useContext } from "react";

const GreetingBanner = (props) => {
  const { word } = useContext(WordContext);

  return (
    <section className={s.banner}>
      <div className={s.bannerWrapper}>
        <Container>
          <div className={s.body}>
            <div className={s.content}>
              <h1>
                Learn how to <br />
                pronounce <span>{word.text}</span> <br />
                like a native speaker!
              </h1>
              <a
                href="link"
                target="_blank"
                className={s.button}
                onClick={() =>
                  props.ga.send({
                    hitType: "pageview",
                    page: "/download",
                    title: "Start learning button click",
                  })
                }
              >
                Start Learning
              </a>
            </div>

            <div className={s.image}>
              <img src={illustration} alt="loudspeaker with words in clouds" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default GreetingBanner;
