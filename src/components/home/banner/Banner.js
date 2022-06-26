import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div class="carousel ">
        <div class="carousel-item   w-full">
          <img src={banner} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
