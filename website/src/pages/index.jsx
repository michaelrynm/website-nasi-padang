import React from "react";
import Hero from "../components/hero";
import MenuCard from "../components/menuCard";
import FoodCard from "../components/foodCard";
import Layout from "../components/layout";
import foodImage from "../assets/food.svg";
import foodImage2 from "../assets/image1.svg";
import foodImage3 from "../assets/image2.svg";
import Data from "../utils/api.json";

export default function Index() {
  const filteredData = Data.filter((item) => item.bestseller === 1);


  return (
    <div>
      <Layout>
        <Hero />
        <div className="pt-36 ps-24 pe-24">
          <div className="grid grid-cols-3 place-items-center pt-10">
            <MenuCard
              description="Embark on a culinary adventure with us."
              image={foodImage}
            />
            <MenuCard
              image={foodImage2}
              description="Warmth and comfort in every dish."
            />
            <MenuCard
              image={foodImage3}
              description="Embrace the richness of cultural cuisine."
            />
          </div>
        </div>

        <div className="pt-36">
          <div className="flex justify-center">
            <p className="font-bold text-4xl">Explore our best seller menu</p>
          </div>
          <div className="grid grid-cols-4 gap-y-8 place-items-center ps-24 pe-24 pt-10 pb-24">
            {filteredData.map((data) => (
              <FoodCard
                title={data.name}
                description={data.description}
                image={data.image}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
