import Image from "next/image";
import React, { useState } from "react";
import { DownArrow } from "../E__exports";
import { InfoBtn, InfoDiv } from "./B_style";

const Info = ({ compatibility }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <InfoBtn onClick={() => setActive(!active)}>
        info
        <Image
          src={DownArrow.src}
          alt="See more info"
          height="13px"
          width="11px"
          layout="fixed"
        />
      </InfoBtn>

      {active && <InfoDiv>{compatibility}</InfoDiv>}
    </>
  );
};

export default Info;
