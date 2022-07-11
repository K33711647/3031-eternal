import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index) {
      return '<span class="text-black">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      // install Swiper modules
      pagination={pagination}
      modules={[Pagination]}
      spaceBetween={50}
      direction={"vertical"}
      slidesPerView={1}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-screen w-screen pt-5 text-black"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
