import styled from "styled-components";
import selected from "../../public/icons/selected.svg";

export const HeaderDiv = styled.header`
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  padding-top: 20px;

  .haveArray {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #45BF55;
    position: absolute;
    margin: -20px -25px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
  }

  .logo {
    font-size: 25px;
    font-weight: bold;
    color: #3CA64A;
  }

  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  section {
    display: flex;
    margin: 20px 90px 0 90px;
    align-items: center;
    justify-content: space-between;
  }

  section:nth-child(2) {
    margin: 40px 110px 0 120px;
  }

  div {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 50px;
    margin-right: 1em;
  }

  li {
    cursor: pointer;

    a {
      color: #00261C;
    }
  }

  .news {
    color: #00261C;
  }

  figure,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    cursor: pointer;
    font-size: 1rem;
  }

  figure:nth-child(3) {
    height: 61px;

    img {
      width: 60px;
    }
  }

  .search {
    width: 33rem;
    height: 2.8rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    input {
      border: none;
      width: 29rem;
      height: 100%;
      font-size: 18px;
      margin-left: 1rem;

      :focus,
      :hover {
        outline: none;
      }
    }

    label {
      margin: 0.2rem 0 0 0.6rem;
    }
  }

  .gear {
    position: absolute;
    right: 67px;
  }

  .asideNav {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .selected {
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ::after {
      content: "";
      background: url(${selected.src}) center center no-repeat;
      position: absolute;
      margin-top: 45px;
      width: 100px;
      height: 100px;
      animation: fadeIn 1s linear;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
