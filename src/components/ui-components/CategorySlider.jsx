import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCard from "./CategoryCard";

const CategorySlider = ({ sliderData }) => {
  return (
    <div className="py-0">
      <Swiper
        modules={[Virtual, Navigation, Pagination, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        loop={false}
        centeredSlides={false}
        autoplay={{ delay: 2000 }}
        className="relative"
        pagination={false}
        breakpoints={{
          370: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        style={{ height: "100%" }}
        grabCursor={true}
        navigation={false}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="bg-white rounded-3xl w-full">
              <CategoryCard item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
