import React from "react";
import Data from "../utils/api.json";
import { useLocation } from "react-router-dom";

export default function Test() {
  const location = useLocation();
  const { title, description } = location.state;
  return (
    <div>
      <p>Test Data</p>
      <div>
        {Data.map((data) => (
          <div>
            <p>id: {data.id}</p>
            <p>id: {data.category}</p>
            <p>id: {data.name}</p>
            <p>id: {data.price}</p>
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold">
        <p>Order Page</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
}
