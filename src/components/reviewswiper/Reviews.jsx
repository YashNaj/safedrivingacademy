import { Swiper, SwiperSlide } from "swiper/react";
import "./review.css";
import "swiper/css/bundle";
import React from "react";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";
import Dad from "../../assets/images/dad.png";
const Reviews = () => {
  return (
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="fullPageSlide">
          <TestimonialCard
            name=" John Doe"
            img={Dad}
            review='"lorem Ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, lorem lorem ipsum
             lorem ipsum lorem ipsum"'
          />
        </SwiperSlide>
        <SwiperSlide className="fullPageSlide">
          <TestimonialCard name=" John Doe"
            img={Dad}
            review='"lorem Ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, lorem lorem ipsum
             lorem ipsum lorem ipsum"' />
        </SwiperSlide>
        <SwiperSlide className="fullPageSlide">
          <TestimonialCard name=" John Doe"
            img={Dad}
            review='"lorem Ipsum lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, lorem lorem ipsum
             lorem ipsum lorem ipsum"'/>
        </SwiperSlide>
      </Swiper>
  );
};

export default Reviews;
