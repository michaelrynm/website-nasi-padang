import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CardMenu(props) {
  const { title, description, price, image } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order", {
      state: {
        image,
        title,
        description,
        price,
      },
    });
  };

  return (
    <div>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={`https://ik.imagekit.io/b88h8bgjc/${image}`} alt="Shoes" className="w-64" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="flex items-center justify-between ms-4 me-3 mb-3">
          <p>{price}k</p>
          <button
            onClick={handleClick}
            className="btn btn-sm bg-yellow-400 hover:bg-slate-400"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
