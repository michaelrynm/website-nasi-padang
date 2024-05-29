import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2 justify-center items-center ps-24 pe-24 pt-32">
        <div>
          <p className="font-bold text-7xl">
            Enjoy Your <br /> Delicious Food!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque numquam consectetur distinctio velit facere culpa, harum
            officia at dolorem.
          </p>
        </div>
        <div className="flex justify-center">
          <p>Nasi Padang Image</p>
        </div>
      </div>
    </div>
  );
}