import React, { useState, useEffect } from "react";
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/js/swiper.esm";
import generateData from "./parts/data";
import SlideItem from "./parts/singleSlide";

export default () => {
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);

  const params = {
    Swiper,
    modules: [Navigation, Pagination],
    initialSlide: 3,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    getSwiper: updateSwiper 
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const renderItem = ({ idx, color, content }) => (
    <SlideItem color={color} content={content} key={`slide_${idx}`} />
  );

  useEffect(() => {
    if (swiper !== null) {
      swiper.on("slideChange", () => updateCurrentIndex(swiper.realIndex));
    }

    return () => {
      if (swiper !== null) {
        swiper.off("slideChange", () => updateCurrentIndex(swiper.realIndex));
      }
    };
  }, [swiper]);
  
  console.log(currentIndex);

  return (
    <div className="slider">
      <ReactIdSwiper {...params}>
        {generateData().map(renderItem)}
      </ReactIdSwiper>
      <div className="buttons buttons-list">
        <button className="button is-primary" onClick={goPrev}>
          Prev
        </button>
        <button className="button is-primary" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};