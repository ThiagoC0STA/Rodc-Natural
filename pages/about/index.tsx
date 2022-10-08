import React from "react";
import { AboutBG, Team, AboutText, Sheets } from "../../components/E__exports";
import { AboutSection, Mission } from "../../styles/pagesStyles";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <AboutBG />
      <AboutSection>
        <h1>Our story</h1>
        <AboutText />
        <Mission>
          <div>
            <Image src={Sheets} alt="Nature" layout="fill" quality={100} />
          </div>
          <article>
            <h2>Mission</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              voluptates labore laudantium mollitia fugiat molestiae hic
              consequuntur libero error tenetur.
            </p>
          </article>
          <article>
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              atque. Quas maxime ad placeat magnam? Recusandae itaque sit cum
              labore?
            </p>
          </article>
        </Mission>
        <Team />
      </AboutSection>
    </>
  );
};

export default Index;
