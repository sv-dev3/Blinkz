import React, { useEffect, useState } from "react";
import BentoGrid from "src/components/ui-components/BentoGrid";
import Footer from "src/components/ui-components/Footer";
import Slider from "src/components/ui-components/Slider";
import { homeSliderData, middleBannerData } from "src/helpers/dummyData";
import { useWindowDimensions } from "src/hooks/useWindowdimension";
import SaleLayout from "src/layout/SaleLayout";

const Home = () => {
  const { width } = useWindowDimensions();
  const [sliderPerView, setSlidesPerView] = useState(2);
  useEffect(() => {
    if (width < 1000) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2);
    }
  }, [width]);

  return (
    <div className="px-0">
      <Slider sliderPerView={1.2} sliderImages={homeSliderData} />
      <SaleLayout />
      <BentoGrid />
      {/* middle section  */}
      <div className="py-10 bg-purple-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap my-8">
            <div className="w-full md:w-2/5 flex items-center md:items-start space-y-3 md:space-y-6 flex-col px-2 md:px-32 mb-10 md:mb-0">
              <span className="text-lg text-gray-900 font-outfitRegular">
                Care for your skin
              </span>
              <p className="text-xl md:text-4xl font-outfitSemiBold text-gray-900">
                Natural self care products
              </p>
              <p className=" text-center md:text-start text-base font-outfitLight text-gray-500">
                We create safe products that really work and are designed to
                make you feel good
              </p>
            </div>
            <div className="w-full md:w-3/5">
              <Slider
                sliderPerView={sliderPerView}
                canShowFooter={true}
                sliderImages={middleBannerData}
                rounded={"rounded-3xl"}
                imgHeight={"h-96"}
                centeredSlide={false}
                pagination={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
