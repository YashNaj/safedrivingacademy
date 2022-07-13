import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import Card from "../card/Card";
const SdaSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="fullPageSlide">
        <Card
          title={["Basic", <span className="light-green">&nbsp;+</span>]}
          price="$740"
          features={
            <>
              <li>20 hrs in class/online</li>
              <li>10 hours home work</li>
              <li>10 hours In Car training</li>
              <li>DLH ( Driver”s license History )</li>
              <li>Obtain from Service Ontario</li>
              <li>4 month reduction</li>
              <li className="plus-feature">
                <span className="light-green list-edit">+</span> A one hour
                refresher with car provided before your road test!
              </li>
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide className="fullPageSlide">
        <Card
          title="Basic"
          price="$640"
          features={
            <>
              <li>20 hrs in class/online</li>
              <li>10 hours home work</li>
              <li>10 hours In Car training</li>
              <li>DLH ( Driver”s license History )</li>
              <li>Obtain from Service Ontario</li>
              <li>4 month reduction</li>
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide className="fullPageSlide">
        <Card
          title="Road Test"
          price="$140"
          features={
            <>
              <li>1 hour lesson before test</li>
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide className="fullPageSlide">
        <Card
          title="Single Lesson"
          price="$55"
          features={<li>A single Lesson provided at your convenience.</li>}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SdaSwiper;
