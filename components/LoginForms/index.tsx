import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Index = () => {
  const { loginForm, registerForm } = useContext(Contexts);

  return (loginForm && <LoginForm />) || (registerForm && <RegisterForm />);
};

export default Index;
