import { ActionTypes } from "../constants/player-types";

const initialState = {
  players: [],
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PLAYERS:
      return { ...state, players: action.payload };

    case ActionTypes.CREATE_PLAYER:
      const newPlayer = [...state.players];
      newPlayer.push(action.payload);
      return { ...state, players: newPlayer };

    case ActionTypes.DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter(
          (player) => player._id !== action.payload
        ),
      };

    // case ActionTypes.UPDATE_PLAYER:
    //   return {
    //     ...state,
    //     players: state.players.filter(
    //       (player) => player._id !== action.payload
    //     ),
    //   };

    default:
      return state;
  }
};
