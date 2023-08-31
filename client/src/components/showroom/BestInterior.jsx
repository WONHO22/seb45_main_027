import React from "react";
import { Link } from "react-router-dom";
import BestInteriorCarousel from "./BestInteriorCarousel";

const BestInterior = () => {
  return (
    <div className="flex-col">
      <div className="flex pt-10 justify-between">
        <div className="flex">
          <h1 className="pt-1 text-5xl text-[#F5634A] font-semibold">
            Best Interior
          </h1>
          <h2 className="pl-4 pt-7 text-xl">삐삐에서 핫한 Best 10</h2>
        </div>

        <Link to="/showroom/write">
          <button className="bg-[#00647B] mt-4 px-4 py-2 text-2xl text-white rounded-2xl font-semibold">
            Post
          </button>
        </Link>
      </div>
      <BestInteriorCarousel></BestInteriorCarousel>
    </div>
  );
};

export default BestInterior;