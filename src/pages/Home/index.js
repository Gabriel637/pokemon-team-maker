import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import KantoMap from "../../assets/images/kantoMap.png";
import HeaderStyled from "../../components/Header";
import Loading from "../../components/Loading";
import {
  ActionBox,
  ButtonBox,
  Container,
  ContentContainer,
  Image,
  ImageBox,
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
            <TextBox>
              {!loading && (
                <Typist cursor={{ element: "" }}>
                  Welcome Pokémon Trainer! <br />
                  <Typist.Delay ms={500} />
                  Here you can make your dream team <br />
                  <Typist.Delay ms={500} />
                  Know better all Digim
                  <Typist.Backspace count={5} delay={200} />
                  Pokémon <br />
                  <Typist.Delay ms={500} />
                  Compare all monsters <br />
                  <Typist.Delay ms={500} />
                  Let's catch'em all!
                </Typist>
              )}
            </TextBox>
            <ButtonBox>
              <Link to="/calculate">Open Pokedex</Link>
            </ButtonBox>
          </ActionBox>
          <ImageBox>
            <Image src={KantoMap} />
          </ImageBox>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Home;
