import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ActionBox = styled.div`
  width: 100%;
  height: ${px2vw(1400)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    height: ${px2vw(400, 768)};
  }
  @media (min-width: 1024px) {
    width: 50%;
    height: ${px2vw(500)};
  }
`;

export const TextBox = styled.div`
  width: 90%;
  min-height: ${px2vw(200, 768)};
  border: 5px double gray;
  padding: 10px;
  border-radius: 5px;
  font-size: 22px;
  font-family: "FreePixel";
  line-height: 25px;
  @media (min-width: 768px) {
    width: 70%;
    min-height: ${px2vw(100, 768)};
  }
  @media (min-width: 1024px) {
    width: 80%;
    min-height: ${px2vw(100)};
  }
`;

export const ButtonBox = styled.div`
  a {
    width: ${px2vw(800)};
    height: ${px2vw(200)};
    margin-top: 5%;
    display: flex;
    text-decoration: none;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    background: red;
    font-family: Arial;
    color: #ffffff;
    font-size: 24px;
    @media (min-width: 768px) {
      width: ${px2vw(400)};
      height: ${px2vw(100)};
    }
    @media (min-width: 1024px) {
      width: ${px2vw(300)};
      height: ${px2vw(60)};
    }
  }
`;

export const ImageBox = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageMapBox = styled.div`
  display: none;
  @media (min-width: 1024px) {
    width: 50%;
    min-height: ${px2vw(500)};
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const ProfessorImage = styled.div`
  width: 30%;
  height: ${px2vw(700)};
  align-self: flex-end;
  @media (min-width: 768px) {
    width: 20%;
    height: ${px2vw(400)};
  }
  @media (min-width: 1024px) {
    width: 30%;
    height: ${px2vw(350)};
  }
`;

export const PokemonImage = styled.div`
  width: 20%;
  height: ${px2vw(300)};
  align-self: flex-end;
  @media (min-width: 768px) {
    width: 10%;
    height: ${px2vw(150)};
  }
  @media (min-width: 1024px) {
    width: 20%;
    height: ${px2vw(120)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
