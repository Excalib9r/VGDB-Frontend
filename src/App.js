import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import UserState from './context/users/UserState';
import GameState from './context/games/GameState';
import ManagedComponents from './vgdbComponents/ManagedComponents';


function App() {
  return (
    <UserState>
      <GameState>
        <Router>
          <ManagedComponents />
        </Router>
      </GameState>
    </UserState>
  );
}

export default App;
