import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";

const reducers = combineReducers({
  allPlayers: playerReducer,
});

export default reducers;
