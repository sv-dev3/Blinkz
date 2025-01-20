import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Virtual,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { breakpoints } from "src/config/responsiveSize";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const MegaMenuSlider = ({
  sliderPerView = 1,
  sliderImages,
  centeredSlide = true,
}) => {
  return (
    <div className="py-0">
      <div className="mx-auto p-0">
        <div className="container flex justify-end items-center space-x-2 pb-4">
          <button className="custom_prev cursor-pointer">
            <ChevronLeft className="custom_prev w-8 h-8 cursor-pointer" />
          </button>
          <button className="custom_next cursor-pointer">
            <ChevronRight className="custom_next w-8 h-8 cursor-pointer" />
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Virtual, Navigation, Pagination, Thumbs]}
          spaceBetween={12}
          slidesPerView={sliderPerView}
          loop={true}
          centeredSlides={centeredSlide}
          autoplay={{ delay: 2000 }}
          className="relative"
          pagination={false}
          observer={"true"}
          breakpoints={breakpoints}
          style={{ height: "100%" }}
          grabCursor={true}
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="bg-white rounded-3xl w-[350px]">
                <Card data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MegaMenuSlider;
