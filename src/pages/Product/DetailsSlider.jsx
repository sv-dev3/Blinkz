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
import GridCard from "src/components/ui-elements/GridCard";
import { ChevronLeft, ChevronRight } from "lucide-react";



const DetailsSlider = ({
  sliderPerView = 1,
  sliderImages,
  centeredSlide = true,
}) => {
  return (
    <div className="py-0">
       <div className="flex justify-end items-center space-x-2 pb-4">
            <button className="prev cursor-pointer">
              <ChevronLeft className="prev w-6 h-6 cursor-pointer" />
            </button>
            <button className="next cursor-pointer">
              <ChevronRight className="next w-6 h-6 cursor-pointer" />
            </button>
          </div>
        <Swiper
          modules={[Autoplay, Virtual, Navigation, Pagination, Thumbs]}
          spaceBetween={12}
          slidesPerView={1}
          loop={true}
          centeredSlides={centeredSlide}
          autoplay={{ delay: 2000 }}
          className="relative"
          pagination={false}
          observer={"true"}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{ height: "100%" }}
          grabCursor={true}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="bg-white rounded-3xl w-full">
                <GridCard data={item} height="h-[300px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default DetailsSlider;
