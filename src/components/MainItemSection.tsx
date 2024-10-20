"use client";

import { RECOMMEND_ITEMS } from "@/data/dummy-data";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const MainItemSection = () => {
  return (
    <section className="bg-black/5 p-4">
      <div className="flex items-center">
        <h2 className="flex-1 text-lg font-bold">와이즐리 추천템</h2>
        <Link href="/" className="text-sm">
          전체보기 {">"}
        </Link>
      </div>

      {/* 상품 */}
      <Swiper slidesPerView={2.4} spaceBetween={16}>
        {RECOMMEND_ITEMS.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex-none w-5/12 h-72 flex flex-col bg-white rounded-md"
          ></SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const ItemCard = ({ item }) => {};

export default MainItemSection;
