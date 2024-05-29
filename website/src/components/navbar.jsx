import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-10 shadow-xl bg-white">
        <div>Logo</div>
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
