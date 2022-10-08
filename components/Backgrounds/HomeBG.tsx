import React from "react";
import { HomeCards, HomeImg } from "../E__exports";
import { HomeMain } from "./B__style";
import Image from "next/image";

const HomeBG = () => {
  return (
    <HomeMain>
      <div className="bg">
        <Image
          src={HomeImg.src}
          alt="Homem andando de moto"
          layout="fill"
          quality={100}
          priority={true}
        />
      </div>

      <h1>Why choose RN?</h1>
      <HomeCards />
    </HomeMain>
  );
};

export default HomeBG;
