import React from "react";
import { MainHomeScreenContainer } from "../styles/MainScreen.style";
import Input from "../components/Input";
import PlayerCards from "../components/PlayerCards";

const Home = () => {
  return (
    <MainHomeScreenContainer>
      <Input />
      <PlayerCards />
    </MainHomeScreenContainer>
  );
};

export default Home;
