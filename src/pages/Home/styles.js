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

export const ActionBox = styled.div`
  width: 70%;
  height: ${px2vw(250, 768)};
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
  }
`;

export const TextBox = styled.div`
  width: 90%;
  height: ${px2vw(70, 768)};
  border: 5px double gray;
  padding: 10px;
  border-radius: 5px;
  color: black;
  font-size: 28px;
  font-family: "FreePixel";
  line-height: 30px;
  @media only screen and (max-width: 1500px) {
    font-size: 30px;
  }
`;

export const ButtonBox = styled.div`
  a {
    width: ${px2vw(200, 768)};
    height: ${px2vw(30, 768)};
    display: flex;
    text-decoration: none;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    background: red;
    font-family: Arial;
    color: #ffffff;
    font-size: 24px;
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
