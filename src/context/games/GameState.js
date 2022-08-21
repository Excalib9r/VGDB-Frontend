import React, { useState } from "react";
import GameContext from "./GameContext";

const GameState = (props) => {
    const [gameState, setGameState] = useState(false);
    const [gameTitle, setGameTitle] = useState("");
    const [gameUrl, setGameUrl] = useState("");
    const showGameInfo = (ShowInfo) => {
        setGameState(ShowInfo);
    }
    const setGameInfo = (title) => {
        setGameTitle(title)
    }
    const setUrl = (url)=>{
        setGameUrl(url);
    }
    return (
        <GameContext.Provider value={{ gameState, gameTitle, gameUrl, showGameInfo, setGameInfo, setUrl}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameState;