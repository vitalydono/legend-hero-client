import { React, useState, useRef, useEffect } from "react";
import { FormContainer, FormWrapper } from "../styles/FormSection.style";
import { SearchInput } from "../styles/SearchInput.style";
import Button from "../components/Action-Button";
import axios from "axios";

// import { MainAddPlayerScreenContainer } from "../styles/MainScreen.style";

const AddPlayer = (pickedPlayer) => {
  const path_url = window.location.pathname;
  const id = path_url.split("/").splice(2, 1).join();

  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [hero, setHeroName] = useState("");
  const [rank, setRank] = useState("");

  const playerInfo = {
    Name: name,
    NickName: nickName,
    PlayerMonster: hero,
    Rank: rank,
  };

  const selectedPlayerValue = {
    Name: name,
    NickName: nickName,
    PlayerMonster: hero,
    Rank: rank,
  };

  useEffect(() => {
    getOnePlayer();
  }, []);

  const getOnePlayer = async () => {
    try {
      if (id) {
        console.log(id);
        const res = await axios.get(
          `http://localhost:5000/players/findPlayer/${id}`
        );
        const selectedPlayer = res.data;
        console.log(selectedPlayer);
        setName(selectedPlayer.Name);
        setNickName(selectedPlayer.NickName);
        setHeroName(selectedPlayer.PlayerMonster);
        setRank(selectedPlayer.Rank);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <SearchInput
          placeholder="name"
          type="text"
          value={id ? selectedPlayerValue.Name : name}
          onChange={(e) => setName(e.target.value)}
        />
        <SearchInput
          placeholder="nick name"
          type="text"
          value={id ? selectedPlayerValue.NickName : nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <SearchInput
          placeholder="hero"
          type="text"
          value={id ? selectedPlayerValue.PlayerMonster : hero}
          onChange={(e) => setHeroName(e.target.value)}
        />
        <SearchInput
          placeholder="rank"
          type="text"
          value={id ? selectedPlayerValue.Rank : rank}
          onChange={(e) => setRank(e.target.value)}
        />

        <Button
          playerInfo={playerInfo}
          id={id}
          selectedPlayerValue={selectedPlayerValue}
        />
      </FormWrapper>
    </FormContainer>
  );
};

export default AddPlayer;
