import React from "react";
import {
  PlayerCard,
  PlayerInfo,
  ActionButtonsWrapper,
} from "../styles/PlayerCards.style";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteOnePlayer } from "../redux/actions/playerActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ player, deleteOnePlayer }) => {
  const navigate = useNavigate();

  const Div = styled.div`
    width: 100%;
    height: 35px;
  `;

  const deleteCard = () => {
    const id = player._id;
    deleteOnePlayer(id);
  };

  return (
    <div>
      <PlayerCard>
        <PlayerInfo>
          <Div>
            <b>Name: </b> {player.Name}
          </Div>
          <Div>
            <b>Nick Name: </b> {player.NickName}
          </Div>
          <Div>
            <b>Hero Name: </b> {player.PlayerMonster}
          </Div>
          <Div>
            <b>Rank: </b> {player.Rank}
          </Div>
        </PlayerInfo>
        <ActionButtonsWrapper>
          <DeleteIcon onClick={deleteCard} />
          <EditIcon onClick={() => navigate(`/Update/${player._id}`)} />
        </ActionButtonsWrapper>
      </PlayerCard>
    </div>
  );
};

export default connect(null, { deleteOnePlayer })(Card);
