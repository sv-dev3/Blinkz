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
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { breakpoints } from "src/config/responsiveSize";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({
  sliderPerView = 2,
  canShowFooter = false,
  imgHeight = "h-[500px]",
  sliderImages,
  rounded = "rounded-xl",
  centeredSlide = true,
}) => {
  return (
    <div className="mx-auto">
      <Swiper
        modules={[Autoplay, Virtual, Navigation, Pagination, Thumbs]}
        spaceBetween={12}
        slidesPerView={sliderPerView}
        loop={true}
        centeredSlides={centeredSlide}
        autoplay={{ delay: 2000000000 }}
        className="relative"
        pagination={{ clickable: true }}
        observer={true}
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
            <div className="bg-white rounded-3xl">
              <img
                src={item.imageUrl}
                alt={`slide-${index}`}
                className={`w-full md:${imgHeight} ${rounded} object-cover ${
                  canShowFooter && imgHeight
                }`}
              />
              {!canShowFooter && (
                <div className="md:absolute top-0 left-[10px] lg:left-[50px]  flex items-center justify-center md:justify-start h-full">
                  <div className="max-w-[450px] w-full  text-center md:text-left py-4 sm:py-0 pb-[40px] sm:pb-0">
                    <h6 class="font-outfitSemiBold text-[18px] mb-[16px] text-center md:text-left">
                      Blend beauty in you
                    </h6>
                    <h3 class="font-outfitSemiBold text-center md:text-left text-[40px] lg:text-[50px] leading-[normal]">
                      Get the skin you want to feel
                    </h3>
                    <a
                      href="javascript:void(0);"
                      className="inline-block px-7 py-2.5 bg-black hover:bg-white border border-[#000] text-white hover:text-black transition rounded-full mt-8 text-[16px] font-outfitSemiBold uppercase"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              )}
              {canShowFooter && (
                <div className="p-4 flex flex-wrap flex-row justify-between items-center">
                  <div className="">
                    <div class="m-2 text-lg font-outfitSemiBold line-clamp-1 text-gray-900">
                      Nutrient face oil
                    </div>
                    <div class="m-2 text-left text-base font-outfitLight text-gray-500">
                      oil
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/About"
                      className=" rounded-full border border-gray-500 w-10 h-10 flex items-center justify-center"
                    >
                      <ChevronDown
                        size={24}
                        className=" inline-block cursor-pointer -rotate-90"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {canShowFooter && (
        <div className="absolute left-0 bottom-0 flex gap-4">
          <button className="custom_prev cursor-pointer border h-[50px] w-[50px] rounded-full flex items-center justify-center border-[#c6bfb1] hover:border-[#000] bg-transparent hover:bg-black hover:text-[#fff] transition-all">
            <ChevronLeft className="custom_prev w-7 h-7 cursor-pointer" />
          </button>
          <button className="custom_prev cursor-pointer border h-[50px] w-[50px] rounded-full flex items-center justify-center border-[#c6bfb1] hover:border-[#000] bg-transparent hover:bg-black hover:text-[#fff] transition-all">
            <ChevronRight className="custom_next w-7 h-7 cursor-pointer  " />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
