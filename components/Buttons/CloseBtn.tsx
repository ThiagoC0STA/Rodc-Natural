import Image from "next/image";
import React from "react";
import { CloseIcon } from "../E__exports";
import { Close } from "./B_style";

type Props = {
  onClick: () => void;
};

const CloseBtn = ({ onClick }: Props) => {
  return (
    <Close tabIndex={-1} onClick={onClick}>
      <Image
        src={CloseIcon.src}
        alt="Close"
        width="45"
        height="45"
        layout="fixed"
      />
    </Close>
  );
};

export default CloseBtn;
