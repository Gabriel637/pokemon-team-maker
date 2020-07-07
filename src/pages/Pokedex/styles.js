import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const PokedexContainer = styled.div`
  margin-top: 3%;
  width: 50%;
  display: flex;
  justify-content: center;
  background: blue;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const PokedexBackground = styled.div`
  width: ${px2vw(10, 50)};
  height: ${px2vw(250, 768)};
  background: red;
`;

export const PokedexHeader = styled.div`
  width: 100%;
  height: ${px2vw(30, 768)};
  background: gray;
`;
