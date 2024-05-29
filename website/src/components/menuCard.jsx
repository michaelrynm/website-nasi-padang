import React from "react";
import food from "../assets/food.svg"

export default function MenuCard(props) {
  const {description, image} = props
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-110 hover:duration-150">
          <div className="card-body">
            <div className="flex items-center gap-5">
            <img src={image} alt="" className="w-24" />
            <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
