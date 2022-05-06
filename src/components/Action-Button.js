import React from "react";
import { ActionButton, Span } from "../styles/Button";
import { createNewPlayer } from "../redux/actions/playerActions";
import { connect } from "react-redux";
import axios from "axios";

const Button = ({ playerInfo, createNewPlayer, id, selectedPlayerValue }) => {
  const addNewPlayer = (e) => {
    e.preventDefault();
    createNewPlayer(playerInfo);
  };

  const updatePlayer = async (e) => {
    e.preventDefault();

    if (id) {
      const res = await axios.put(
        `http://localhost:5000/players/update_player/${id}`,
        selectedPlayerValue
      );
      console.log(selectedPlayerValue);

      // .catch((err) => {
      //   console.log(err);
      // });
    }
  };

  return (
    <div>
      <ActionButton onClick={id ? updatePlayer : addNewPlayer}>
        <Span>{id ? "Update Player" : "Add Player"}</Span>
      </ActionButton>
    </div>
  );
};

export default connect(null, { createNewPlayer })(Button);
