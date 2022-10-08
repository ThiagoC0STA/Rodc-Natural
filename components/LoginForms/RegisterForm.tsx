import React from "react";
import { FormSection } from "./L__style";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import Image from "next/image";
import { LoginPhoto } from "../E__exports";
import Link from "next/link";

const RegisterForm = () => {
  const { setLoginForm, setRegisterForm } = useContext(Contexts);

  return (
    <FormSection>
      <div className="login">
        <button className="close" onClick={() => setRegisterForm(false)}>
          x
        </button>
        <figure>
          <Image
            src={LoginPhoto.src}
            alt="Nature"
            width="400"
            height="734"
            style={{ borderRadius: "20px 0px 0px 20px", marginLeft: "-2px" }}
          />
        </figure>

        <div>
          <h1>Register</h1>

          <form>
            <label htmlFor="user">User</label>
            <input type="text" id="user" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Register</button>
          </form>

          <p style={{ marginTop: "50px", marginBottom: "-15px" }}>
            Already have an account?
          </p>

          <button
            className="registerbtn"
            onClick={() => {
              setRegisterForm(false);
              setLoginForm(true);
            }}
          >
            Go to login
          </button>
        </div>
      </div>
    </FormSection>
  );
};

export default RegisterForm;
