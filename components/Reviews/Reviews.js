import s from "components/Reviews/Reviews.module.scss"
import Container from "components/UI/Container/Container";
import React from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import Controls from "./Controls";

const feedbackData = [
  {
    id: 1,
    author: "Pavel",
    title: "Amazing app",
    text: "This app is great. I’m that person that NEVER writes reviews. It’s that good... Amazing easy interface for everyday use, and great discounts; I bought the full version for a year. God bless you developers❤️"
  },
  {
    id: 2,
    author: "Pavel",
    title: "Amazing app",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula massa, condimentum sit amet feugiat a, eleifend tincidunt mauris. Phasellus dignissim mollis erat, eu maximus dui semper in. Nullam sed nunc malesuada, iaculis nunc a, venenatis orci."
  },
  {
    id: 3,
    author: "Pavel",
    title: "Amazing app",
    text: "This app is great. I’m that person that NEVER writes reviews. It’s that good... Amazing easy interface for everyday use, and great discounts; I bought the full version for a year. God bless you developers❤️"
  },
  {
    id: 4,
    author: "Pavel",
    title: "Amazing app",
    text: "This app is great. I’m that person that NEVER writes reviews. It’s that good... Amazing easy interface for everyday use, and great discounts; I bought the full version for a year. God bless you developers❤️"
  },
  {
    id: 5,
    author: "Pavel",
    title: "Amazing app",
    text: "This app is great. I’m that person that NEVER writes reviews. It’s that good... Amazing easy interface for everyday use, and great discounts; I bought the full version for a year. God bless you developers❤️"
  },

]

const SliderSwiper = () => {
  const swiperRef = React.useRef(null);

  return (
    <section className={s.slider}>

      <h2 className={s.title}>Anybody Can Speak English With Confidence</h2>

      <Container>
        <div className={s.wrapper}>
          <Swiper
            rewind={true}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            ref={swiperRef}

            className={s.slider}
            breakpoints={{
              "320": {
                slidesPerView: 1,
                spaceBetween: 20,
                autoHeight: true,
              },
              "768": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "992": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "1268": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {feedbackData.length && feedbackData.map(feedback => {
              return (
                <SwiperSlide key={feedback.id}>
                  <article className={s.item}>
                    <h3 className={s.itemTitle}>{feedback.title}</h3>
                    <div className={s.itemText}>
                      <p>{feedback.text}</p>
                    </div>
                    <div className={s.itemAuthor}>{feedback.author}</div>
                  </article>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Controls swiperRef={swiperRef} />
        </div>
      </Container>
    </section>
  )
    ;
};

export default SliderSwiper;