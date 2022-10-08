import Image from "next/image";
import React from "react";
import { HomeObj } from "./objects";
import { Cards } from "./O__style";

const HomeCards = () => {
  return (
    <Cards>
      {HomeObj.map(({ description, icon, id, alt }) => (
        <div key={id}>
          <figure>
            <Image
              src={icon}
              alt={alt}
              width="30px"
              height="30px"
              layout="fixed"
            />
            <figcaption>{description}</figcaption>
          </figure>
        </div>
      ))}
    </Cards>
  );
};

export default HomeCards;
