import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const HeaderStyled = styled.header`
  width: 100%;
  height: ${px2vw(200)};
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 100%;
    height: ${px2vw(200)};
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: ${px2vw(120)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
