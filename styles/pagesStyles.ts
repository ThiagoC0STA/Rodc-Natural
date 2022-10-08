import styled from "styled-components";

export const AboutSection = styled.section`
  h1 {
    margin-top: 120px;
    margin-left: 175px;
  }

  h2 {
    font-size: 27px;
    margin-bottom: 56px;
  }

  h1,
  h2 {
    color: #3ca64a;
  }

  section:nth-child(2) {
    margin: 55px 175px 100px 175px;

    p {
      line-height: 1.4em;
      margin-bottom: 16px;
    }
  }
`;

export const Mission = styled.div`
  width: 100vw;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    z-index: 0;
    position: absolute;
    width: 100vw;
    height: 450px;

    img {
      object-fit: cover;
    }
  }

  ::before {
    content: "";
    position: absolute;
    height: 280px;
    width: 1px;
    background-color: #ffffffda;
    z-index: 1;
  }

  p {
    color: #fff;
    max-width: 500px;
  }

  article {
    text-align: center;
    z-index: 1;
  }
`;

export const ContactSection = styled.section`
  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    color: #3ca64a;
    margin-top: 80px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 86px;
    margin: 123px 0 123px 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background: #3ca64a;
    border-radius: 50px;
  }
`;
