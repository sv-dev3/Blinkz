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
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChooseOptionSlider = ({
  sliderPerView = 1,
  sliderImages,
  centeredSlide = true,
}) => {
  return (
    <div className="w-full max-w-[800px] mx-auto">
      <Swiper
        modules={[Autoplay, Virtual, Navigation, Pagination, Thumbs]}
        spaceBetween={12}
        slidesPerView={sliderPerView}
        loop={true}
        centeredSlides={centeredSlide}
        autoplay={{ delay: 2000 }}
        className="relative"
        pagination={false}
        observer={true}
        observeParents={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        grabCursor={true}
        navigation={{
          nextEl: ".nextEl",
          prevEl: ".prevEl",
        }}
        style={{ height: "auto" }}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div className="bg-white rounded-3xl">
              <img
                src={item.imageUrl}
                alt="product"
                className=" rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="py-4">
        <div className="mx-auto p-0">
          <div className="flex justify-center mb-4">
            <div className="flex justify-end items-center gap-x-6 pb-4">
              <button className="prevEl cursor-pointer grid place-items-center p-4 rounded-full bg-black ">
                <ChevronLeft className="prevEl w-6 h-6 cursor-pointer text-white" />
              </button>
              <button className="nextEl cursor-pointer  grid place-items-center p-4 rounded-full  bg-black">
                <ChevronRight className="nextEl w-6 h-6 cursor-pointer text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseOptionSlider;
