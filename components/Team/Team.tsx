import Image from "next/image";
import React from "react";
import { TeamCards } from "./Items";
import { TeamSection } from "./T__style";

const Team = () => {
  return (
    <TeamSection>
      <h1>Our team</h1>
      <article>
        {TeamCards.map(({ id, name, office, image }) => (
          <div key={id}>
            <figure>
              <Image
                src={image}
                alt={name}
                width="280"
                height="350"
                layout="fixed"
              />
              <figcaption>{name}</figcaption>
            </figure>
            <p>{office}</p>
          </div>
        ))}
      </article>
    </TeamSection>
  );
};

export default Team;
