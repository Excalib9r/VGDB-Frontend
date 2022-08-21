import React, { useContext, useState } from 'react'
import { Games } from './Games'
import GameContext from '../context/games/GameContext';
import IndGame from './IndGame';

export default function UserScreen() {

  const [allGames, setAlLGames] = useState(true);
  const [topRated, setTopRated] = useState(false);
  const [mostPlayed, setMostPlayed] = useState(false);

  const game = useContext(GameContext);

  const sethome = ()=>{
    setAlLGames(true);
    setTopRated(false);
    setMostPlayed(false);
    game.setGameInfo("");
    game.showGameInfo(false);
    game.setUrl("");
  }

  const settoprated = ()=>{
    setAlLGames(false);
    setTopRated(true);
    setMostPlayed(false);
    game.setGameInfo("");
    game.showGameInfo(false);
    game.setUrl("");
  }

  const setmostplayed = ()=>{
    setAlLGames(false);
    setTopRated(false);
    setMostPlayed(true);
    game.setGameInfo("");
    game.showGameInfo(false);
    game.setUrl("");
  }

  return (
    <div className='accessories'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item bg-white border border-success rounded-4 p-1 mx-1">
                <button type="submit" className="btn btn-primary" onClick = {sethome}>Home</button>
              </li>
              <li className="nav-item bg-white border border-success rounded-4 p-1 mx-1">
                <button type="submit" className="btn btn-primary" onClick = {settoprated}>Top Rated</button>
              </li>
              <li className="nav-item bg-white border border-success rounded-4 p-1 mx-1" >
                <button type="submit" className="btn btn-primary" onClick = {setmostplayed}>Most Played</button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {
        game.gameState ? <IndGame image={game.gameUrl} title={game.gameTitle} /> : <Games allGames={allGames} topRated={topRated} mostPlayed={mostPlayed}/>
      }
    </div>
  )
}
