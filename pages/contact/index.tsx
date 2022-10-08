import React from "react";
import { ContactBG, ContactLinks } from "../../components/E__exports";
import { ContactSection } from "../../styles/pagesStyles";

const Index = () => {
  return (
    <>
      <ContactBG />
      <ContactSection>
        <h1>Contact us in just one click</h1>
        <ContactLinks />
      </ContactSection>
    </>
  );
};

export default Index;
