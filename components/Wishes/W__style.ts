import styled from "styled-components";

export const WishesSideBar = styled.aside`
  position: fixed;
  width: 550px;
  height: 100vh;
  top: 0;
  z-index: 999;
  background-color: #fff;
  transition: all ease-in-out 0.4s;
  padding: 50px 44px 0 44px;
  box-shadow: 0 0 8px #181818;

  .clearwishes {
    position: absolute;
    top: 150px;
    right: 75px;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
  }

  .totalwishes {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    border: none;
    font-size: 17px;
    color: #fff;
    background-color: #297333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  h1 {
    font-size: 35px;
  }
`;

export const ItemsCard = styled.section`
  margin-top: 100px;
  height: 585px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 26px;

  .card {
    width: 200px;
    height: 290px;
    background: #f2f2f2;
    border-radius: 30px;

    span {
      border-radius: 30px 30px 0px 0px;
    }

    figcaption {
      width: 40px;
      height: 40px;
      border-radius: 0 0 0 10px;
      background-color: #ffffff89;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      top: -154px;
      left: 161px;
      cursor: pointer;

      span {
        margin: 2px 2px 0 0 !important;
      }
    }

    div {
      margin-top: 40px;
      gap: 35px;
      padding: 0 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        cursor: pointer;
      }
    }

    p {
      color: #3CA64A;
      font-weight: bold;
      font-size: 20px;
    }

    h2 {
      text-align: center;
      padding: 10px;
      font-size: 16px;
      font-weight: 600;
      height: 45px;
      margin-top: -45px;
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: none;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: none;
  }
`;
