import React, { useState } from "react";
import Layout from "../components/layout";
import foodImage from "../assets/food.jpg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Order() {
  const location = useLocation();
  const { title, description, price, image } = location.state;
  const [selectedRadio, setSelectedRadio] = useState("takeaway");
  const [name, setName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTableNumber = (e) => {
    setTableNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order-summary", {
      state: {
        title,
        description,
        price,
        image,
        selectedRadio,
        name,
        tableNumber,
      },
    });
  };

  const handleRadio = (value) => {
    setSelectedRadio(value);
  };

  return (
    <div className="bg-gray-100">
      <Layout>
        <div className="mt-10 mb-10">
          <p className="text-2xl font-medium text-center">
            Complete your order
          </p>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="flex justify-center p-5 bg-white w-1/2 gap-10">
              <div>
                <img
                  src={`https://ik.imagekit.io/b88h8bgjc/${image}`}
                  alt=""
                  className="w-80"
                />
              </div>
              <div>
                <p className="font-medium text-xl">{title}</p>
                <p>{description}</p>
                <div className="divider mt-10"></div>
                <div className="flex justify-end">
                  <div className="grid grid-cols-2">
                    <p>Qty : </p>
                    <p>1</p>
                    <p>Total : </p>
                    <p>Rp {price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<form action={handleSubmit}>
        <div className="flex justify-center mt-5 mb-10">
          <div className="w-1/2 bg-white p-5">
            <div>
              <p className="text-center font-medium text-2xl">Order Details</p>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-y-7 mt-8">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                required
                onChange={handleNameChange}
              />
              <input
                type="number"
                placeholder="Table Number"
                className="input input-bordered w-full max-w-xs"
                onChange={handleTableNumber}
                required
              />
              <div>
                <div className="grid grid-cols-2 mb-3">
                  <label htmlFor="">Take Away</label>
                  <input
                    type="radio"
                    value="takeaway"
                    onChange={() => handleRadio("takeaway")}
                    checked={selectedRadio === "takeaway"}
                  />
                </div>
                <div className="grid grid-cols-2">
                  <label htmlFor="">Dine In</label>
                  <input
                    type="radio"
                    value="dinein"
                    onChange={() => handleRadio("dinein")}
                    checked={selectedRadio === "dinein"}
                  />
                </div>
              </div>
              <div>
                <button
                  className="btn btn-sm bg-yellow-300 hover:bg-yellow-300"
                  onClick={handleSubmit}
                >
                  Submit Order!
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </Layout>
    </div>
  );
}
