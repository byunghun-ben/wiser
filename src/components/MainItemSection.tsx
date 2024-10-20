"use client";

import { RECOMMEND_ITEMS } from "@/data/dummy-data";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

type MainItemSectionProps = {
  label: string;
};

const MainItemSection = ({ label }: MainItemSectionProps) => {
  return (
    <section className="p-4">
      <div className="flex items-center mb-4">
        <h2 className="flex-1 text-lg font-bold">{label}</h2>
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
          >
            <ItemCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const ItemCard = ({ item }: { item: (typeof RECOMMEND_ITEMS)[number] }) => {
  return (
    <>
      <div className="h-40 relative">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="33vw"
          className="object-cover"
        />
      </div>
      <div className="p-2 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xxs font-bold text-primary rounded border border-primary px-1 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm line-clamp-2 font-semibold">{item.title}</h3>
        <span className="text-xs line-through decoration-slate-500  text-gray-500">
          {item.originalPrice.toLocaleString()}원
        </span>
        <div className="flex items-baseline gap-1">
          <span className="font-semibold">
            {item.salePrice.toLocaleString()}원
          </span>
          <span className="text-xs font-semibold">일반가</span>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 text-yellow-300" />
          <span className="text-xs text-slate-400">
            {item.review}점 ({item.reviewCount})
          </span>
        </div>
      </div>
    </>
  );
};

export default MainItemSection;
