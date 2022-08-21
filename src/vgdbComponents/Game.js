import React, { useContext } from 'react'
import GameContext from '../context/games/GameContext';


export const Game = (props) => {

  const game = useContext(GameContext);

  const myStyle = {
    width : "24.5rem"
  }
  const goToGame = ()=>{
    game.setGameInfo(props.title);
    game.showGameInfo(true);
    game.setUrl(props.image);
  }
  return (
    <div className='d-inline-flex'>
        <div className="card text-bg-dark hoveringGame" style = {myStyle} onClick = {goToGame}>
          <div className='card-body'>
          <img src={props.image} className="card-img forEachGame" alt="..." />
          <div className="card-img-overlay">
            <span>
            <h6 className="card-title bg-blue">{props.title}</h6>
            </span>
            </div>
          </div>
        </div>
        </div>
  )
}
