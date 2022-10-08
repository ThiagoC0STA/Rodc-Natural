import Image from "next/image";
import React from "react";
import { ShopImg, ShopCards } from "../E__exports";
import { ShopMain } from "./B__style";

const ShopBG = () => {
  return (
    <ShopMain>
      <div className="bg">
        <Image
          src={ShopImg.src}
          alt="Montanhas"
          layout="fill"
          quality={100}
          priority={true}
        />
      </div>

      <div className="texts">
        <h1>Welcome to our </h1>
        <h2>virtual store</h2>
      </div>

      <ShopCards />
    </ShopMain>
  );
};

export default ShopBG;
