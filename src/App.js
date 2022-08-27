import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import UserState from './context/users/UserState';
import GameState from './context/games/GameState';
import ManagedComponents from './vgdbComponents/ManagedComponents';
import BuyState from './context/buy/BuyState';
import NavGameState from './context/navPage/NavGameState';
import SideBarState from './context/sideBarPage/SideBarState';
import IndGameState from './context/indGame/IndGameState';

function App() {
  console.log('in app.js');
  return (
    <UserState>
      <GameState>
        <NavGameState>
          <SideBarState>
            <IndGameState>
              <BuyState>
                <Router>
                  <ManagedComponents />
                </Router>
              </BuyState>
            </IndGameState>
          </SideBarState>
        </NavGameState>
      </GameState>
    </UserState>
  );
}

export default App;
