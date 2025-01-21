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
      <div className="px-4  py-10 bg-[#f3eee8]">
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row flex-wrap my-8">
            <div className="w-full md:w-1/2 lg:w-2/5 mb-10 md:mb-0">
              <div className="md:pr-[100px]">
                <span className="text-lg text-gray-900 font-outfitRegular inline-block mb-6">
                  Care for your skin
                </span>
                <p className="text-[40px] font-outfitMedium text-gray-900 leading-[48px] mb-4">
                  Natural self care products
                </p>
                <p className=" text-center md:text-start text-base font-outfitLight text-black w-[300px]">
                  We create safe products that really work and are designed to
                  make you feel good
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 pagination-hide">
              <Slider
                sliderPerView={sliderPerView}
                canShowFooter={true}
                sliderImages={middleBannerData}
                rounded={"rounded-3xl"}
                imgHeight={"h-96"}
                centeredSlide={false}
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
