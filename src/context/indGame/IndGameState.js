import React, { useState } from "react";
import IndGameContext from "./IndGameContext";

const IndGameState = (props) => {
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [developer, setDeveloper] = useState("");
    const [publisher, setPublisher] = useState("");
    const [supportedsystem, setSupportedSystem] = useState("");
    const [playedby, setPlayedBy] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [releasedate, setReleasedate] = useState("");
    const [price, setPrice] = useState("");

    const setGameId = (ShowInfo) => {
        setId(ShowInfo);
    }
    const setGameDescription = (ShowInfo) => {
        setDescription(ShowInfo);
    }
    const setGameImage = (ShowInfo) => {
        setImage(ShowInfo);
    }
    const setGameTitle = (title) => {
        setTitle(title)
    }
    const setGameDeveloper= (url)=>{
        setDeveloper(url);
    }
    const setGamepublisher = (ShowInfo) => {
        setPublisher(ShowInfo);
    }
    const setGamesupportedsystem = (ShowInfo) => {
        setSupportedSystem(ShowInfo);
    }
    const setGameplayedby = (ShowInfo) => {
        setPlayedBy(ShowInfo);
    }
    const setGamegenre = (ShowInfo) => {
        setGenre(ShowInfo);
    }
    const setGamerating = (ShowInfo) => {
        setRating(ShowInfo);
    }
    const setGamereleasedate = (ShowInfo) => {
        setReleasedate(ShowInfo);
    }
    const setGameprice = (ShowInfo) => {
        setPrice(ShowInfo);
    }

    return (
        <IndGameContext.Provider value={{ id, description, image, title, developer,publisher,supportedsystem,playedby,genre,rating,releasedate,price,setGameId, setGameDescription ,setGameImage,setGameTitle, setGameDeveloper,setGamepublisher ,setGamesupportedsystem,setGameplayedby,setGamegenre, setGamerating,setGamereleasedate,setGameprice}}>
            {props.children}
        </IndGameContext.Provider>
    )
}

export default IndGameState;