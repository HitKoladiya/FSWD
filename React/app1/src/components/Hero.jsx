import React from "react";
import {
  TruckIcon,
  UserIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-[url('/images/hero-image.jpg')] bg-cover bg-no-repeat flex items-center">
      <div className="drop-shadow-lg px-10 md:ml-20 w-full lg:w-2/3 xl:w-1/2 -mt-48 lg:-mt-0">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-amber-50">
          Style your life <br /> with our <br /> trending collections
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 rounded-t-3xl xl:rounded-tl-none xl:rounded-tr-[52px] border-t min-h-32 w-full xl:w-10/12 bg-white py-5 px-7 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-fit mx-auto">
          <div className="h-full flex flex-row lg:justify-center space-x-5 items-center px-10">
            <div className="h-14 w-14 bg-amber-400/30 p-3 rounded-xl text-amber-500">
              <TruckIcon className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-gray-500 text-sm">On purchases over ₹499</p>
            </div>
          </div>
          <div className="h-full flex flex-row lg:justify-center space-x-5 items-center px-10">
            <div className="h-14 w-14 bg-amber-400/30 p-3 rounded-xl text-amber-500">
              <UserIcon className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold">99% Satisfied Customers</h4>
              <p className="text-gray-500 text-sm">
                Our clients' opinions speak for themselves
              </p>
            </div>
          </div>
          <div className="h-full flex flex-row lg:justify-center space-x-5 items-center px-10">
            <div className="h-14 w-14 bg-amber-400/30 p-3 rounded-xl text-amber-500">
              <ShieldCheckIcon className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold">Originality Guaranteed</h4>
              <p className="text-gray-500 text-sm">
                07 days warranty for each product from our store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
