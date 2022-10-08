import styled from "styled-components";

export const FormSection = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .registerbtn {
    padding: 13px 40px;
    background: #297333;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    margin-top: 25px;
    transition: all ease 0.4s;

    :hover {
      background: #3ca64a;
    }
  }

  .login {
    width: 900px;
    height: 734px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;

    h1 {
      font-size: 45px;
      font-weight: bold;
      z-index: 1;
      position: relative;

      ::before {
        content: "";
        display: block;
        width: 25px;
        height: 26px;
        background: #37b38d;
        position: absolute;
        margin-top: 26px;
        margin-left: -7px;
        border-radius: 0.2rem;
        z-index: -1;
      }
    }

    div {
      margin: 60px 53px 0 53px;
      width: 390px;
    }

    a {
      text-decoration: underline;
    }

    p {
      margin-top: 14px;
      font-size: 14px;
    }

    h2 {
      margin-top: 60px;
      font-size: 22px;
      font-weight: bold;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;

      input {
        margin-top: 14px;
        border: 1px solid #eee;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background-color: #eee;
        transition: all 0.2s;

        :focus,
        :hover {
          outline: none;
          background-color: #fff;
          box-shadow: 0 0 0 2px #3ca64a;
        }
      }

      label {
        margin-top: 40px;
        font-size: 19px;
        font-weight: 500;
      }

      button {
        background: #297333;
        border-radius: 10px;
        width: 120px;
        height: 42px;
        border: none;
        color: #ffffff;
        margin-top: 40px;
        font-weight: bold;
        font-size: 14px;
        transition: all ease 0.4s;

        :hover {
          background: #3ca64a;
        }
      }
    }
  }

  .close {
    position: absolute;
    margin-left: 850px;
    margin-top: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color: #297333;
    font-weight: bold;
    color: #fff;
    font-size: 15px;
    transition: all ease 0.2s;

    :hover {
      background-color: #3ca64a;
    }
  }
`;
