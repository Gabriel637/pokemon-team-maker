import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
    @media only screen and (max-width: 800px) {
      width: 50%;
    }
    @media only screen and (min-width: 801px) and (max-width: 1200px) {
      width: 20%;
    }
  }
`;

export const Image = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
  @media only screen and (max-width: 800px) {
    width: 40%;
  }
`;
