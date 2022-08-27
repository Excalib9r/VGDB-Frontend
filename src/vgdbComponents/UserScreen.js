import React, { useContext, useEffect, useState } from 'react'
import { Games } from './Games'
import IndGame from './IndGame';
import NavGameContext from '../context/navPage/NavGameContext';
import GameContext from '../context/games/GameContext';
import SideBarContext from '../context/sideBarPage/SideBarContext';
import axios from 'axios';
import Inventory from './Inventory';
import WishList from './WishList';
import MyCart from './MyCart';
import News from './News';

export default function UserScreen() {

  
  const game = useContext(GameContext);
  // const navInfo = useContext(NavGameContext);
  const sidePage = useContext(SideBarContext);

  // const [profiles,setProfiles] = useState([])
  // useEffect(()=>{
  //   axios.get("https://reqres.in/api/users").then(data=>{
  //     console.log(data.data.data)
  //     setProfiles(data.data.data)
  //   })
  // },[])
  return (
    <div className='accessories-extend'>
      {/* {profiles.map(data=>{
        return(

          <i  mg src={data.avatar}/>
        )
      })} */}
      {
        sidePage.inventory ? <Inventory myGames = {game.myGames}/> : ""
      }
      {
        sidePage.news ? <News News = {game.myGames}/> : ""
      }
      {
        sidePage.wishlist ? <WishList myGames = {game.myGames}/> : ""
      }
      {
        sidePage.myCart ? <MyCart myGames = {game.myGames}/> : ""
      }
      {
        game.gameState ? <IndGame /> : <Games myGames = {game.myGames} />
      }
    </div>
  )
}
