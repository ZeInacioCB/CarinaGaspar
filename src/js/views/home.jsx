import React from "react";

import { ShowCarousel } from "../components/showCarousel.jsx";
import { images } from "../data/showImageData.js";

export const Home = () => {
  return <ShowCarousel images={images} />
};