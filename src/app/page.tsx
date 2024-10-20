import MainItemSection from "@/components/MainItemSection";
import BannerSlider from "@/components/swiper/BannerSlider";
import CategorySlider from "@/components/swiper/CategorySlider";
import { CATEGORY_BEST, RECOMMEND_ITEMS } from "@/data/dummy-data";
import { StarIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon, WindowIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh bg-black/5 max-w-[560px] mx-auto">
      <main className="bg-black/5">
        {/* 배너 - 1 */}
        <div className="bg-black/5">
          <p>100원에 전상품 원가로 구매하려 가기 {">"}</p>
        </div>

        <div className="bg-black/5 flex items-center h-14 px-3 bg-[#0077ED] text-white">
          <Link href="/" className="flex-none">
            <WindowIcon className="size-6" />
          </Link>
          <span className="flex-1 text-center text-sm">
            최고의 가성비가 아니면 팔지 않습니다.
          </span>
          <Link href="/order/basket" className="flex-none">
            <ShoppingCartIcon className="size-6" />
          </Link>
        </div>

        {/* Tab */}
        <div className="bg-white flex items-center px-4">
          <Link
            href="/"
            className="flex-1 h-12 flex items-center justify-center border-b-2 border-[#0077ED]"
          >
            <span className="text-sm">추천</span>
          </Link>
          <Link
            href="/"
            className="flex-1 h-12 flex items-center justify-center border-b-2 border-white"
          >
            <span className="text-sm">베스트</span>
          </Link>
          <Link
            href="/"
            className="flex-1 h-12 flex items-center justify-center border-b-2 border-white"
          >
            <span className="text-sm">신제품</span>
          </Link>
          <Link
            href="/"
            className="flex-1 h-12 flex items-center justify-center border-b-2 border-white"
          >
            <span className="text-sm">출시예정</span>
          </Link>
        </div>

        {/* 캐러셀 */}
        <div className="bg-red-900/5 w-full">
          <BannerSlider />
        </div>

        {/* 카테고리 */}
        <div className="overflow-hidden">
          <CategorySlider />
        </div>

        {/* 섹션 1 - 와이즐리 추천템 */}
        <MainItemSection />

        {/* 섹션 2 - 니치향수 & 디퓨저 출시 */}
        <section className="bg-black/5">
          <div className="flex items-center">
            <h2 className="flex-1 text-lg font-bold">와이즐리 추천템</h2>
            <Link href="/" className="text-sm">
              전체보기 {">"}
            </Link>
          </div>

          {/* 상품 */}
          <div className="overflow-x-auto">
            <div className="flex gap-3">
              {RECOMMEND_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-5/12 h-72 flex flex-col bg-white rounded-md"
                >
                  <div className="h-40 relative">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <div className="flex items-center gap-1">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-red-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm line-clamp-2">{item.title}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-sm line-through text-gray-500">
                        {item.originalPrice.toLocaleString()}원
                      </span>
                      <span className="text-sm text-red-500">
                        {item.salePrice.toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-red-500">
                        {item.review}점 ({item.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 섹션 3 - 생활용품도 와이즐리에서 */}
        <section className="bg-black/5">
          <div className="flex items-center">
            <h2 className="flex-1 text-lg font-bold">와이즐리 추천템</h2>
            <Link href="/" className="text-sm">
              전체보기 {">"}
            </Link>
          </div>

          {/* 상품 */}
          <div className="overflow-x-auto">
            <div className="flex gap-3">
              {RECOMMEND_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-5/12 h-72 flex flex-col bg-white rounded-md"
                >
                  <div className="h-40 relative">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <div className="flex items-center gap-1">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-red-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm line-clamp-2">{item.title}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-sm line-through text-gray-500">
                        {item.originalPrice.toLocaleString()}원
                      </span>
                      <span className="text-sm text-red-500">
                        {item.salePrice.toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-red-500">
                        {item.review}점 ({item.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 중간 배너 */}
        <div className="w-full py-10">
          <Link href="/product/cheer">
            <Image
              src="https://m.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/618990a8cbe81662893097b5d8f04cfd.jpg"
              alt="배너"
              width={560}
              height={100}
            />
          </Link>
        </div>

        {/* 섹션 A - 카테고리 BEST */}
        <section className="flex flex-col gap-4 py-10">
          <div className="flex items-center px-4">
            <h2 className="flex-1 text-lg font-bold">카테고리 BEST</h2>
            <Link href="/" className="text-sm">
              전체보기 {">"}
            </Link>
          </div>

          {/* 상품 */}
          <div className="overflow-x-auto px-4">
            <div className="grid grid-cols-[repeat(3,auto)] gap-x-2 gap-y-4">
              {CATEGORY_BEST["건강식품"].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 bg-white rounded-lg"
                >
                  <div className="aspect-[1/1.3] relative rounded-lg overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.prd_product_name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium line-clamp-1">
                      {item.prd_product_name}
                    </p>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">
                          {(100000).toLocaleString()}원
                        </span>
                        <span className="text-xxs">일반가</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-[#0077ED] font-bold tracking-tight">
                          {(1000).toLocaleString()}원
                        </span>
                        <span className="text-xxs text-[#0077ED] tracking-tight">
                          제로마진가
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="size-4 text-yellow-300" />
                      <span className="text-xs text-slate-500">
                        {4.7} ({200})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
