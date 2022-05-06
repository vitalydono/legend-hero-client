import {ActionTypes} from "../constants/player-types";

const initialState = {
    players: [],
    value: '',
    playersAfterFilter: []
};

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PLAYERS:
            return {...state, players: action.payload};

        case ActionTypes.CREATE_PLAYER:
            const newPlayer = [...state.players];
            newPlayer.push(action.payload);
            return {...state, players: newPlayer};

        case ActionTypes.DELETE_PLAYER:
            return {
                ...state,
                players: state.players.filter(
                    (player) => player._id !== action.payload
                ),
            };

        case ActionTypes.SAVE_VALUE:
            return {
                ...state,
                value: action.payload

            }

        case ActionTypes.FILTER_PLAYERS:
            let allPlayers = [...state.players];
            //const allFilterOrders = []
            if (action.payload.length > 0) {
                let filteredPlayers = allPlayers.filter(
                    (player) => player.Name.indexOf(action.payload, 0) > -1
                );

                return { ...state, playersAfterFilter: filteredPlayers };
            }
            return {...state, playersAfterFilter:allPlayers}


        default:
            return state;
    }
};
