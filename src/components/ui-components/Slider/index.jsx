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

const Slider = ({
  sliderPerView = 2,
  canShowFooter = false,
  imgHeight = "h-[500px]",
  sliderImages,
  rounded = "rounded-xl",
  centeredSlide = true,
}) => {
  return (
    <div className="pt-12">
      <div className="mx-auto p-0">
        <Swiper
          modules={[Autoplay, Virtual, Navigation, Pagination, Thumbs]}
          spaceBetween={12}
          slidesPerView={sliderPerView}
          loop={true}
          centeredSlides={centeredSlide}
          autoplay={{ delay: 2000000000 }}
          className="relative"
          pagination={true}
          observer={"true"}
          breakpoints={breakpoints}
          style={{ height: "100%" }}
          grabCursor={true}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="bg-gray-100 rounded-3xl">
                <img
                  src={item.imageUrl}
                  alt={`slide-${index}`}
                  className={`w-full md:${imgHeight} ${rounded} object-cover ${
                    canShowFooter && imgHeight
                  }`}
                />
                {!canShowFooter && <div className=" "></div>}
                {canShowFooter && (
                  <div className="p-4  flex flex-wrap flex-row justify-between items-center">
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
      </div>
    </div>
  );
};

export default Slider;
