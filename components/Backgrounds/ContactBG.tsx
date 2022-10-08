import Image from "next/image";
import React from "react";
import { ContactImg, Map } from "../E__exports";
import { ContactMain } from "./B__style";

const ContactBG = () => {
  return (
    <ContactMain>
      <div className="bg">
        <Image
          src={ContactImg.src}
          alt="Wallpapper to represent a location"
          quality={100}
          layout="fill"
          priority={true}
        />
      </div>

      <h1>Location</h1>

      <figure>
        <Image
          src={Map.src}
          alt="Location map"
          width="500"
          height="278"
          quality={100}
          layout="fixed"
        />

        <figcaption>
          <h2>
            Curitiba - PR
          </h2>
        </figcaption>
      </figure>
    </ContactMain>
  );
};

export default ContactBG;
