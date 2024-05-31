import React from "react";

export default function FoodCard(props) {
  const { title, description, image } = props;
  return (
    <div>
      <div className="card card-compact w-80 h-80 2xl:w-96 2xl:h-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://ik.imagekit.io/b88h8bgjc/${image}`}
            alt="Shoes"
            className="w-64 h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
