import React, { useState } from "react";
import GameContext from "./GameContext";

const GameState = (props) => {
    const [gameState, setGameState] = useState(false);
    const [myGames, setMygames] = useState([]);

    const setGamesMyGames = (info)=>{
        setMygames(info)
    }
    const showGameInfo = (ShowInfo) => {
        setGameState(ShowInfo);
    }
    return (
        <GameContext.Provider value={{ gameState,myGames,setGamesMyGames, showGameInfo}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState;