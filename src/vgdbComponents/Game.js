import React, { useContext } from 'react'
import GameContext from '../context/games/GameContext';
import IndGameContext from '../context/indGame/IndGameContext';

export const Game = (props) => {

  const game = useContext(GameContext);
  const indGame = useContext(IndGameContext);

  const myStyle = {
    width: "24.5rem"
  }
  const goToGame = () => {
    game.showGameInfo(true);
    indGame.setGameId(props.id);
    indGame.setGameDescription(props.description);
    indGame.setGameImage(props.image);
    indGame.setGameTitle(props.title);
    indGame.setGameDeveloper(props.developer);
    indGame.setGamepublisher(props.publisher);
    indGame.setGamesupportedsystem(props.supportedsystem);
    indGame.setGameplayedby(props.playedby);
    indGame.setGamegenre(props.genre);
    indGame.setGamerating(props.rating);
    indGame.setGamereleasedate(props.relasedate);
    indGame.setGameprice(props.price);
  }
  return (
    <div className='d-inline-flex'>
      <div className="card text-bg-dark hoveringGame" style={myStyle} onClick={goToGame}>
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
