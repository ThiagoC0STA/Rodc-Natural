import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LoginPhoto } from "../E__exports";
import { FormSection } from "./L__style";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

const LoginForm = () => {
  const { setLoginForm, setRegisterForm } = useContext(Contexts);

  return (
    <FormSection>
      <div className="login">
        <button className="close" onClick={() => setLoginForm(false)}>
          x
        </button>
        <figure>
          <Image
            src={LoginPhoto.src}
            alt="nature"
            width="400"
            height="734"
            style={{ borderRadius: "20px 0px 0px 20px", marginLeft: "-2px" }}
          />
        </figure>
        <div>
          <h1>Login</h1>

          <form>
            <label htmlFor="user">User</label>
            <input type="text" id="user" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Log in</button>
          </form>

          <Link href="/">
            <a>Forgot password?</a>
          </Link>

          <h2>Register</h2>
          <p>Don&apos;t have a RN moto parts account yet?</p>
          <button
            className="registerbtn"
            onClick={() => {
              setRegisterForm(true);
              setLoginForm(false);
            }}
          >
            Create your account on the website
          </button>
        </div>
      </div>
    </FormSection>
  );
};

export default LoginForm;
