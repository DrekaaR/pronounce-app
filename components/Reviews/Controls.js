import React from 'react';
import s from "components/Reviews/Reviews.module.scss";
// Import React Icons
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Controls = ({ swiperRef }) => {
  return (
    <div className={s.controls}>
      <button id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()}>
        <HiArrowNarrowLeft />
      </button>
      <button id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()}>
        <HiArrowNarrowRight />
      </button>
    </div>
  )
};

export default Controls;