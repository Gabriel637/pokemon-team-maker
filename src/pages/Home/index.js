import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import KantoMap from "../../assets/images/kantoMap.png";
import OakProfessor from "../../assets/images/oakProfessor.png";
import Squirtle from "../../assets/images/squirtle.png";
import HeaderStyled from "../../components/Header";
import Loading from "../../components/Loading";
import {
  ActionBox,
  ButtonBox,
  Container,
  ContentContainer,
  Image,
  ImageBox,
  ImageMapBox,
  PokemonImage,
  ProfessorImage,
  TextBox,
} from "./styles";

function Home() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <Loading show={loading} />
      <HeaderStyled />
      <Container>
        <ContentContainer>
          <ActionBox>
            <ImageBox>
              <ProfessorImage>
                <Image src={OakProfessor} />
              </ProfessorImage>
              <PokemonImage>
                <Image src={Squirtle} />
              </PokemonImage>
            </ImageBox>
            <TextBox>
              {!loading && (
                <Typist cursor={{ element: "" }}>
                  Welcome, Pokémon Trainer! <br />
                  <Typist.Delay ms={500} />
                  All the information about Pokémon is here, discover
                  everything.
                  <br />
                  <Typist.Delay ms={500} />
                  Let's catch'em all!
                </Typist>
              )}
            </TextBox>
          </ActionBox>
          <ImageMapBox>
            <Image src={KantoMap} />
          </ImageMapBox>
        </ContentContainer>
        <ButtonBox>
          <Link to="/pokedex">Open Pokedex</Link>
        </ButtonBox>
      </Container>
    </>
  );
}

export default Home;
