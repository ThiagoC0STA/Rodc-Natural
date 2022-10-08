import styled from "styled-components";

export const CarousselSection = styled.section`
  margin-bottom: 130px;

  .rec.rec-arrow {
    background-color: #000;
    color: #f2f2f2;
    border: none;
    box-shadow: none;

    :hover,
    :focus {
      background-color: #45bf55;
      color: #f2f2f2;
    }
  }

  .banner {
    margin-top: 120px;

    img {
      object-fit: cover;
    }

    figcaption {
      position: absolute;
      width: 100%;
      text-align: center;
      margin-top: -160px;
      color: #f2f2f2;
      font-size: 35px;
      font-family: "Fredericka the Great", cursive;
    }
  }

  .price {
    display: flex;
    align-items: center;
    font-weight: 800;
    justify-content: center;
    font-size: 16px;
    width: 108px;
    height: 39px;
    color: #ffffff;
    position: absolute;
    top: 0;
    background: #1e7329;
    border-radius: 12px;
    margin-left: 125px;
    z-index: 99;
  }

  section {
    margin-top: 170px;
    padding: 0 100px 0 100px;

    a {
      position: absolute;
      right: 168px;
      margin-top: -60px;

      display: flex;
      justify-content: center;
      gap: 14px;
    }
  }

  h1 {
    position: relative;
    left: 85px;
    top: -80px;
    color: #3ca64a;
  }
`;

export const CarousselItems = styled.div`
  z-index: 1;
  overflow: hidden;

  .blackDiv {
    z-index: 1;
    position: absolute;
    background-color: #000000a7;
    color: #fff;
    font-weight: 600;
    width: 233px;
    height: 194px;
    border-radius: 32px;
    align-items: center;
    justify-content: space-around;
    padding: 33px;
    margin-top: -198px;
    transition: all ease 0.5s;
    display: flex;
    opacity: 0;

    button {
      width: 55px;
      height: 55px;
      background: #328c3e;
      border-radius: 50%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      :focus {
        outline: none;
      }
    }
  }

  figure {
    img {
      border-radius: 32px;
      object-fit: contain;
    }
  }

  :hover {
    .blackDiv {
      opacity: 1;
    }
  }
`;

export const ShopProducts = styled.section`
  width: 70%;
  margin: 50px 0 0 70px;

  .cards {
    margin-bottom: 50px;
    overflow: hidden;

    article {
      height: 430px;
      background-color: #00000012;
      width: 297px;
      border-radius: 10px;
      overflow: hidden;

      figure:nth-child(1) {
        img {
          object-fit: cover;
        }
      }

      figure:nth-child(2) {
        position: absolute;
        margin-top: -219px;
        margin-left: 257px;
        background: #ededed;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px 8px;
        cursor: pointer;
      }
    }

    h3 {
      font-weight: 500;
      text-align: center;
      font-size: 21px;
      font-family: "Roboto Slab", serif;
      position: absolute;
      width: 296px;
      margin-top: 25px;
    }

    div {
      margin: 150px 28px 0 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h4 {
      font-size: 22px;
      color: #3ca64a;
    }
  }

  .slick-track {
    display: flex;
    gap: 50px;
  }

  .slick-dots {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    width: 93%;
    bottom: initial !important;
    top: -54px !important;
  }

  .dots {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background: #3ca64a;
    border-radius: 5px;
  }
`;
