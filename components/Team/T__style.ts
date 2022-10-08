import styled from "styled-components";

export const TeamSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 150px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    p {
      position: absolute;
      text-align: center;
      max-width: 150px;
      line-height: 1.5em;
      font-size: 18px;
    }

    ::after {
      content: "";
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      margin-top: -4px;
      width: 280px;
      height: 349px;
      border-radius: 32px;
      opacity: 0;
      transition: all ease 0.5s;
    }
    :hover {
      ::after,
      figcaption,
      p,
      figure:last-child {
        opacity: 1;
        transition: all ease 0.5s;
      }
    }
  }

  figcaption,
  p,
  figure:last-child {
    opacity: 0;
    z-index: 99;
  }

  figure:first-child {
    img {
      border-radius: 32px;
      object-fit: cover;
    }

    figcaption {
      position: absolute;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      border-radius: 32px;
      flex-direction: column;
      margin-top: -355px;
      font-size: 35px;
      font-weight: 700;
      padding: 36px 26px;
    }
  }

  article {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    gap: 36px;
    margin-top: 96px;
    color: #fff;
  }

  h1 {
    margin-left: 0 !important;
  }
`;
