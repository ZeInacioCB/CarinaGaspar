import React from "react";

import { ShowCards } from "../components/showCards.jsx";
import { images } from "../data/showImageData.js";


export const Work = () => {

  return (
    <div>
        <h1 className="text-3xl font-bold text-center py-2">This is my work</h1>
        <div className="navbar bg-base-100">
            <ShowCards images={images} />
        </div>
    </div>
  );
};

