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
        <div className="flex justify-between mb-4">
          <div className="">
            <h4 className="font-outfitMedium text-[22px]">Trend This Week</h4>
          </div>
          <div className="flex justify-end items-center space-x-2 pb-4">
            <button className="custom_prev cursor-pointer">
              <ChevronLeft className="custom_prev w-6 h-6 cursor-pointer" />
            </button>
            <button className="custom_next cursor-pointer">
              <ChevronRight className="custom_next w-6 h-6 cursor-pointer" />
            </button>
          </div>
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
              <div className="bg-white rounded-3xl w-full">
                <Card data={item} height="h-[150px]" animateButtons={false} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MegaMenuSlider;
