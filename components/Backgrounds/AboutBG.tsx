import React from "react";
import { AboutImg } from "../E__exports";
import { AboutMain } from "./B__style";
import Image from "next/image";

const AboutBG = () => {
  return (
    <AboutMain>
      <div className="bg">
        <Image
          src={AboutImg.src}
          alt="Homem mechendo com ferramentas"
          layout="fill"
          quality={100}
          priority={true}
        />
      </div>

      <h1>
        Understand a little more about <p>RN</p>
      </h1>
    </AboutMain>
  );
};

export default AboutBG;
