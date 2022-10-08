import styled from "styled-components";

export const CartSideBar = styled.aside`
  position: fixed;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  height: 100vh;
  top: 0;
  z-index: 999;
  background-color: #fff;
  transition: all ease-in-out 0.4s;
  padding: 50px 44px 0 44px;
  box-shadow: 0 0 8px #181818;

  .currency {
    position: absolute;
    bottom: 100px;
    right: 44px;
  }

  h1 {
    font-size: 35px;
  }
`;

export const Empty = styled.div`
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  h2 {
    font-weight: normal;
    font-size: 22px;
  }

  button {
    font-size: 20px;
    padding: 17px 70px;
    background: #d9d9d9;
    border-radius: 20px;
    border: none;
    font-weight: bold;
  }
`;

export const ItemsCard = styled.section`
  margin-top: 40px;
  height: 580px;
  overflow-y: scroll;

  a {
    position: absolute;
    right: 90px;
    top: 100px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }

  .card {
    width: 420px;
    height: 160px;
    background: #f2f2f2;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    gap: 25px;

    span {
      border-radius: 20px;
    }

    article {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 16px;
        width: 190px;
        height: 80px;
        font-weight: 600;
      }

      p {
        font-size: 20px;
        color: #297333;
        font-weight: bold;
      }

      .price {
        display: flex;
        gap: 30px;

        div {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;

          button {
            background: #3ca64a;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            color: #f2f2f2;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }
        }
      }
    }
  }

  .scrollDiv {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 30px;
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
