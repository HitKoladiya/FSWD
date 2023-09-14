// import Image from "next/image";
import Link from "react-router-dom";
import React from "react";

const HomeCatagories = () => {
  return (
    <div className="flex flex-col space-y-5 mb-20">
      <h1 className="text-2xl font-bold text-center uppercase">
        New Collections
      </h1>
      <hr className="w-1/2 md:w-1/4 lg:w-1/5 mx-auto border-2 border-amber-500 rounded-full border-opacity-50" />
      <div className="px-10 lg:px-20 2xl:px-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-3">
        <Link href="/catalogue/Women%20Ethnic%20Wear?type=Kurta%20Sets%20WE">
          <div className="relative mx-auto w-11/12 p-10 h-[34rem] cursor-pointer bg-cover group">
            <Image
              src="https://images.unsplash.com/photo-1583398289705-8b6efdd1e2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              fill
              alt="Kurta Sets"
              className="absolute top-0 left-0 object-cover h-full w-full"
            />
            <div className="absolute h-24 flex rounded-l-xl justify-center items-center py-3 bg-amber-500 shadow-xl -right-1 w-5/12 bottom-10">
              <h1 className="font-bold text-center text-white text-3xl uppercase">
                Cotton Kurties
              </h1>
            </div>
            <div className="absolute -z-10 -inset-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-700 opacity-25 blur transition duration-300 group-hover:opacity-100 group-hover:duration-200"></div>
          </div>
        </Link>
        {/*  */}
        <Link href="/catalogue/Women%20Sarees?type=jacquard%20WS">
          <div className="relative mx-auto w-11/12 p-10 h-[34rem] cursor-pointer bg-cover group">
            <Image
              src="https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              height={1000}
              width={1000}
              alt="Sarees"
              className="absolute top-0 left-0 object-cover h-full w-full"
            />
            <div className="absolute h-24 flex rounded-l-xl justify-center items-center py-3 bg-amber-500 shadow-xl -right-1 w-5/12 bottom-10">
              <h1 className="font-bold text-center text-white text-3xl uppercase">
                Sarees
              </h1>
            </div>
            <div className="absolute -z-10 -inset-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-700 opacity-25 blur transition duration-300 group-hover:opacity-100 group-hover:duration-200"></div>
          </div>
        </Link>
        {/*  */}
        <Link href="/catalogue/Women%20Ethnic%20Wear?type=Skirts%20WE">
          <div className="relative mx-auto w-11/12 p-10 h-[34rem] cursor-pointer bg-cover group">
            <Image
              src="https://images.unsplash.com/photo-1619583541439-63542c5d8d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              fill
              alt="Kurta Sets"
              className="absolute top-0 left-0 object-cover h-full w-full"
            />
            <div className="absolute h-24 flex rounded-l-xl justify-center items-center py-3 bg-amber-500 shadow-xl -right-1 w-5/12 bottom-10">
              <h1 className="font-bold text-center text-white text-3xl uppercase">
                Skirts
              </h1>
            </div>
            <div className="absolute -z-10 -inset-1 rounded-lg bg-gradient-to-r from-amber-600 to-orange-700 opacity-25 blur transition duration-300 group-hover:opacity-100 group-hover:duration-200"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeCatagories;
