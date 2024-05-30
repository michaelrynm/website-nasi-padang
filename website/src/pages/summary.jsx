import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout";
import qrImage from "../assets/qr.png";

export default function Summary() {
  const location = useLocation();
  const { title, description, price, image, selectedRadio, name, tableNumber } =
    location.state;
  const randomNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="bg-gray-100">
      <Layout>
        <div className="flex justify-center">
          <div className="bg-white p-10 mt-10 mb-10 rounded-lg shadow-xl">
            <p className="font-bold text-5xl text-center text-red-600">
              Thank<span className="text-black">You! </span>
            </p>
            <p className="text-center font font-medium text-3xl mt-2">
              Your order has been submited!
            </p>
            <p className="text-center mt-3">Order Number: {randomNumber}</p>

            <div className="divider"></div>

            <p className="font-bold text-xl">Name: {name}</p>
            <p className="font-bold text-xl">Table Number: {tableNumber}</p>

            <p className="mt-4 text-xl">Item: {title}</p>
            <p className="text-xl">Price: {price}</p>
            <p className="text-xl">{selectedRadio}</p>
            <div className="divider"></div>

            <p className="font-medium">
              Please complete your payment in the cashier or <br />
              scan the QR code below to complete payment cashlessly
            </p>
            <div className="flex justify-center">
              <img src={qrImage} alt="" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
