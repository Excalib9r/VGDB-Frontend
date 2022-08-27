import React, { useState } from "react";
import NavGameContext from "./NavGameContext";

const NavGameState = (props) => {
    const [allGames, setAlLGames] = useState(true);
    const [topRated, setTopRated] = useState(false);
    const [mostPlayed, setMostPlayed] = useState(false);

    const allGamesInfo = (Info) => {
        setAlLGames(Info);
    }
    const topRatedInfo = (Info) => {
        setTopRated(Info)
    }
    const mostPlayedInfo = (Info)=>{
        setMostPlayed(Info);
    }
    return (
        <NavGameContext.Provider value={{ allGames, topRated, mostPlayed, allGamesInfo, topRatedInfo,  mostPlayedInfo}}>
            {props.children}
        </NavGameContext.Provider>
    )
}

export default NavGameState;