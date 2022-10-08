import styled from "styled-components";

export const HomeMain = styled.main`
  margin-top: 16.5px;
  height: 620px;
  overflow-x: hidden;
  transition: all ease 0.5s;

  h1 {
    position: absolute;
    left: 18vw;
    margin-top: 130px;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
  }
`;

export const AboutMain = styled.main`
  margin-top: 16.5px;
  height: 620px;
  overflow-x: hidden;

  h1 {
    max-width: 370px;
    position: absolute;
    left: 230px;
    margin-top: 170px;
    color: #fff;
    font-weight: 700;
    font-size: 40px;
    text-align: center;

    p {
      margin-top: 4px;
      font-size: 70px;
    }
  }
`;

export const ShopMain = styled.main`
  margin-top: 16.5px;
  height: 620px;
  overflow-x: hidden;

  img {
    object-fit: cover;
  }

  h1,
  h2 {
    color: #fff;
    z-index: 1;
    text-align: center;
  }

  .texts {
    position: absolute;
    left: 205px;
    margin-top: 140px;
  }

  h1 {
    max-width: 500px;
    font-weight: 700;
    font-size: 64px;
  }
  h2 {
    margin-top: 4px;
    font-size: 36px;
  }
`;

export const ContactMain = styled.main`
  margin-top: 16.5px;
  height: 620px;
  overflow-x: hidden;

  h1 {
    position: absolute;
    left: 302px;
    margin-top: 120px;
    color: #ffffff;
    font-size: 40px;
  }

  figure {
    margin-left: 170px;
    margin-top: 240px;
    position: absolute;

    figcaption {
      width: 500px;
      height: 29px;
      background-color: #fff;
      border-radius: 5px;
      font-weight: 400;
      font-size: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
    }

    img {
      border-radius: 10px;
    }
  }
`;
