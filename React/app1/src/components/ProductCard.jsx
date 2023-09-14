import React from "react";
import Link from "react-router-dom";

const ProductCard = ({ id, productName, sellingPrice, MRP, image }) => {
  return (
    <Link href={`/product/${id}`} className="h-full w-full mx-auto">
      <div className="relative h-full shadow hover:shadow-lg transition-all duration-300 rounded-2xl bg-white border ">
        <img
          src={image}
          alt="product"
          className="w-full h-48 md:h-72 object-cover rounded-t-xl"
        />
        <div className="p-5">
          <h3 className="text-gray-700 font-semibold text-lg">
            {productName}
          </h3>
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold text-gray-900 mt-1">
              <span className="text-gray-400 line-through font-medium">
                {Number(MRP).toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>{" "}
              {Number(sellingPrice).toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </h5>
            <p className="absolute top-5 text-white font-bold bg-red-600 shadow text-xs rounded-lg p-2">
              {(100 - (Number(sellingPrice) / Number(MRP)) * 100).toFixed(0)}%
              off
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
