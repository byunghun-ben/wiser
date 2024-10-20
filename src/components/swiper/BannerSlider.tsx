"use client";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

const BANNER_IMAGES = [
  {
    src: "https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d8a3f041194010facc9d8639352ad9b3.jpg",
  },
  {
    src: "https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/78209809d4cb9f95ce10078a8fbe66aa.jpg",
  },
  {
    src: "https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/5967ffa3f9dbf800bc83057824097d56.jpg",
  },
  {
    src: "https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/83ec44317b17a5cb454ddc945f82f3e6.jpg",
  },
  {
    src: "https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f689a4d23640fc9bc27de714fd5f01e5.png",
  },
  {
    src: "https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/e7c69082039d2e908d4adc2151f2aae2.png",
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SwiperComponent
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{ delay: 5000 }}
      onSlideChangeTransitionEnd={(swiper) => {
        setCurrentIndex(swiper.realIndex);
      }}
    >
      {BANNER_IMAGES.map(({ src }, index) => (
        <SwiperSlide key={src}>
          <div className="w-full relative aspect-[1.285/1]">
            <Image
              src={src}
              alt="배너"
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="absolute bottom-2 right-2 z-10 bg-black/50 px-2 py-1 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-bold">
          {currentIndex + 1} / {BANNER_IMAGES.length}
        </span>
      </div>
    </SwiperComponent>
  );
};

export default BannerSlider;
