import React, { useContext } from 'react'
import { Game } from "./Game";
import GameContext from '../context/games/GameContext';

export const Games = () => {
  const game = useContext(GameContext);
  const i = 0;
  return (
    <div className='forGames'>
    {
    game.myGames.map((game) =>{
      i++;
      return(
        <Game key = {game.id} id = {game.id} devolpoer = {game.dname} publisher = {game.pname} supportedsystem = {game.supportedsystem} playedby = {game.playedby} genre = {game.gtitle} rating = {game.rating}  releasedate = {game.releasedate} price = {game.price} image = {game.photo} title = {game.title} serial = {i}/>
      )
    })
    }
   </div>
  )
}
