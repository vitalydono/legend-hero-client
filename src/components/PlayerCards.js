import React from "react";
import Card from "./Card";
import {PlayerCardsContainer} from "../styles/PlayerCards.style";
import {useEffect} from "react";
import {getAllPlayers} from "../redux/actions/playerActions";
import {useSelector, connect} from "react-redux";

const PlayerCards = ({getAllPlayers}) => {
    let players = useSelector((store) => store.allPlayers.players) || [];
    let value = useSelector((store) => store.allPlayers.value);


    useEffect(() => {
        getAllPlayers();
    }, [value]);
    return (
        <div>
            <PlayerCardsContainer>
                {value.length > 0 ?
                    players.filter((player) => player.Name.indexOf(value, 0) > -1).map((player, index) => {
                            return <Card player={player} key={index}/>
                        }
                    ) : players.map((player, index) => {
                        return <Card player={player} key={index}/>;
                    })}

            </PlayerCardsContainer>
        </div>
    );
};

export default connect(null, {getAllPlayers})(PlayerCards);
