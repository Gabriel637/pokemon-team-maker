import React, { useState } from "react";
import HeaderStyled from "../../components/Header";
import Loading from "../../components/Loading";
import {
  Container,
  ContentContainer,
  PokedexBackground,
  PokedexContainer,
  PokedexHeader,
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
          <PokedexContainer>
            <PokedexBackground>
              <PokedexHeader></PokedexHeader>
            </PokedexBackground>
          </PokedexContainer>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Home;
