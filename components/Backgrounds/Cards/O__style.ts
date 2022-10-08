import styled from "styled-components";

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 30px;
  position: absolute;
  left: 11vw;
  margin-top: 250px;
  z-index: 1;

  div {
    width: 145px;
    height: 112px;
    background-color: #fff;
    filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.3));
    border-radius: 10px;
    padding-bottom: 10px;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: -webkit-fill-available;

      img {
        object-fit: fill !important;
      }

      figcaption {
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        max-width: 120px;
      }
    }
  }
`;
