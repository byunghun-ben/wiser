"use client";

import { CATEGORY } from "@/data/dummy-data";
import Image from "next/image";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// TODO: grid css가 적용되기 전에 로드되어서 레이아웃이 깨지는 문제가 있음
const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={5}
      grid={{
        rows: 2,
        fill: "row",
      }}
      // 간격
      spaceBetween={10}
      modules={[Grid, Pagination]}
      style={{
        padding: "1rem",
      }}
    >
      {CATEGORY.map(({ image, label }) => (
        <SwiperSlide key={label} className="">
          <div className="flex flex-col items-center">
            <Image
              src={image}
              alt={label}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xs whitespace-pre tracking-tight">
              {label}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
