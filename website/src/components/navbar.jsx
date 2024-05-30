import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-10 shadow-xl bg-white items-center">
        <div>
          <div className="flex items-center">
            <p className="text-4xl font-bold text-red-500">NASI</p>
            <p className="text-4xl font-bold">PADANG</p>
          </div>
        </div>
        <div className="flex gap-10">
          <Link to={"/"} className="font-medium text-lg">
            Home
          </Link>
          <Link to={"/menu"} className="font-medium text-lg">
            Menu
          </Link>
          <Link to={"/about"} className="font-medium text-lg">About</Link>
        </div>
      </div>
    </div>
  );
}
