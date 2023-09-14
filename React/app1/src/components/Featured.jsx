"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import ProductCard from "./ProductCard";


const SwiperPage = ({ products }) => {
  return (
    <div className="my-10 mx-auto flex-col space-y-5 pt-6">
      <h1 className="text-2xl font-bold text-center">TRENDING PRODUCTS</h1>
      <hr className="w-1/2 md:w-1/4 lg:w-1/5 mx-auto border-2 border-amber-500 rounded-full border-opacity-50" />
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          620: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1670: {
            slidesPerView: 5,
          },
          1970: {
            slidesPerView: 6,
          },
        }}
        className="swiper-wrapper w-9/12 py-3 mx-auto px-10"
      >
        {products.allCatalogue.map((product) => (
          <SwiperSlide key={product.productUniqueId}>
            <ProductCard
              id={product.productUniqueId}
              productName={product.productName}
              sellingPrice={product.sellingPrice}
              MRP={product.MRP}
              image={product.photos.mainImage[0][Object.keys(product.photos.mainImage[0])[0]]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPage;
