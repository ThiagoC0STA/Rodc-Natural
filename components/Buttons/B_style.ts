import styled from "styled-components";

export const InfoBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  gap: 2px;
  padding: 3px 9px;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  font-size: 13px;
  color: #3ca64a;
  margin-top: -217px;
  margin-left: 6px;
  cursor: pointer;
`;

export const InfoDiv = styled.section`
  width: 297px;
  height: 221px;
  position: absolute;
  background-color: #ffffff;
  margin-top: -190px;
  border-radius: 0px 0px 10px 10px;
  animation: slideIn 0.3s;
  background: #232323;
  text-align: center;
  color: #ffffff;
  padding-top: 40px;

  @keyframes slideIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BuyButton = styled.button`
  padding: 9px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3abd71;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.4s;
  position: absolute;
  right: 10px;
  top: 10px;
  background: transparent;
  border: none;

  :focus {
    outline: none;
  }
`;

export const Login = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  background-color: transparent;
  font-size: 14px;
`;

export const Finish = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  border: none;
  font-size: 17px;
  color: #fff;
  background-color: #297333;
`;
