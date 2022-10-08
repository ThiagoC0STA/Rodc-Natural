import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { User } from "../E__exports";
import { Login } from "./B_style";

const LoginBtn = () => {
  const { setLoginForm } = useContext(Contexts);

  return (
    <Login onClick={() => setLoginForm(true)}>
      Login / Registration
      <Image
        src={User.src}
        alt="Make the login or registration"
        width="30"
        height="30"
        layout="fixed"
        style={{ marginTop: "-3px" }}
      />
    </Login>
  );
};

export default LoginBtn;
