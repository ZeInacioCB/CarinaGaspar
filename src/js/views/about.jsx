import React from "react";

import { ShowCards } from "../components/showCards.jsx";
import { images } from "../data/showImageData.js";

export const About = () => {
        return (
          <div className="navbar bg-base-100">
                <h1 className="text-3xl font-bold text-center">About Me my friends</h1>
                <ShowCards images={images} />
          </div>
        );
      };
