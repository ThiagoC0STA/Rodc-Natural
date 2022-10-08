import styled from "styled-components";

export const Store = styled.section`
  display: flex;
  margin: 110px 55px;

  section:first-child {
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-right: 100px;

    h1 {
      font-size: 40px;
      color: #000;
      font-weight: bold;
      margin-bottom: 50px;
    }

    h2 {
      font-size: 19px;
      color: #000;
      margin-left: 30px;
      cursor: pointer;
      font-weight: 400;
    }

    figure {
      width: 18px;
      height: 18px;
      position: absolute;
      margin-left: 5px;
    }

    div {
      display: flex;
      align-items: center;
    }

    .productSelected {
      color: #3CA64A;
      font-weight: 600;
    }
  }
`;
