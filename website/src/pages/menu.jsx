import React, { useState } from "react";
import Layout from "../components/layout";
import CardMenu from "../components/cardMenu";
import Data from "../utils/api.json";

export default function Menu() {
  const dataMakanan = Data.filter((item) => item.category === 1);
  const dataSayuran = Data.filter((item) => item.category === 2);
  const dataMinuman = Data.filter((item) => item.category === 3);
  return (
    <div>
      <Layout>
        <div className="flex justify-center mt-20">
          <p className="text-7xl font-serif font-thin text-center">
            Simple and Tasty <br /> Recipes
          </p>
        </div>
        <div>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg"
              aria-label="All Menu"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="grid grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-7">
                {Data.map((data) => (
                  <CardMenu
                    image={data.image}
                    title={data.name}
                    description={data.description}
                    price={data.price}
                  />
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg"
              aria-label="Lauk"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="grid grid-cols-4 place-items-center gap-y-7">
                {dataMakanan.map((data) => (
                  <CardMenu
                    image={data.image}
                    title={data.name}
                    description={data.description}
                    price={data.price}
                  />
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg"
              aria-label="Sayuran"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="grid grid-cols-4 place-items-center gap-y-7">
                {dataSayuran.map((data) => (
                  <CardMenu
                    image={data.image}
                    title={data.name}
                    description={data.description}
                    price={data.price}
                  />
                ))}
              </div>
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-lg"
              aria-label="Minuman"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="grid grid-cols-4 place-items-center gap-y-7">
                {dataMinuman.map((data) => (
                  <CardMenu
                    image={data.image}
                    title={data.name}
                    description={data.description}
                    price={data.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
