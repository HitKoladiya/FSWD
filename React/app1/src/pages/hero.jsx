import React from "react";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import HomeCatagories from "../components/HomeCatagories";
import allCatalogue from "../utils/catalougeData.json";


const getProducts = async () => {


    console.log(allCatalogue);

//   const querySnapshot = await getDocs(collection(db, "catalogue"));

//   let allCatalogue = [];
//   querySnapshot.forEach((doc) => {
//     if (Object.keys(doc.data()).length > 0) {
//       allCatalogue.push(doc.data());
//     }
//   });
//   console.log(allCatalogue);

  return { allCatalogue };
};

export const revalidate = 10;

const Home = async () => {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <Hero />
      <Featured products={products} />
      <HomeCatagories />
    </div>
  );
};

export default Home;
