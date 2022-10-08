import styled from "styled-components";

export const FooterDiv = styled.footer`
  background-color: #f2f2f2;
  color: #131313;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 136px 0 136px;
  height: 123px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 148px;

    img {
      width: 30px;
      height: 30px;

      :nth-child(1) {
        width: 27px;
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;
