import { ActionTypes } from "../constants/player-types";
import axios from "axios";

export const getAllPlayers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/players/getAllPlayers");
    const players = res.data;

    dispatch({
      type: ActionTypes.GET_PLAYERS,
      payload: players,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createNewPlayer = (playerData) => async (dispatch) => {
  try {
    console.log(playerData, "before data");
    const res = await axios.post(
      "http://localhost:5000/players/add_player",
      playerData
    );
    const newPlayer = res.data;
    console.log(newPlayer, "reerer");

    dispatch({
      type: ActionTypes.CREATE_PLAYER,
      payload: newPlayer,
    });
    console.log(newPlayer);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOnePlayer = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/players/delete_player/${id}`
    );
    const playerToDelete = id;

    dispatch({
      type: ActionTypes.DELETE_PLAYER,
      payload: playerToDelete,
    });
  } catch (error) {
    console.log(error);
  }
};
