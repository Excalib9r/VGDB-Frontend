import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import NavGameContext from '../context/navPage/NavGameContext';
import GameContext from '../context/games/GameContext';
import SideBarContext from '../context/sideBarPage/SideBarContext';

const UserSidebar = (props) => {

    const game = useContext(GameContext);
    // const navInfo = useContext(NavGameContext);
    const sidePage = useContext(SideBarContext);

    
    const setEvrything = ()=>{
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
        localStorage.removeItem('token');
    }

    const forInventory = ()=>{
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(false);
        axios.get("http://localhost:5001/api/login/inventory").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        game.showGameInfo(false);
        sidePage.showInventory(true);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
    }

    const forNews = ()=>{
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(false);
        axios.get("http://localhost:5001/api/login/news").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(true);
        sidePage.showMyCart(false);
    }

    const forWishlist = ()=>{
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(false);
        axios.get("http://localhost:5001/api/login/wishlist").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(true);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
    }

    const forMyCart = ()=>{
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(false);
        axios.get("http://localhost:5001/api/login/myCart").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(true);
    } 

    return (
        <div className="container">
            <div className="sidebar">
                <div className="profile">
                    <div className="profile_logo">
                        <i className='bx bxs-user' ></i>
                        <div className="profile_name">{props.userName}</div>
                        <i className='bx bx-male'></i>
                    </div>
                    <i className='bx bx-menu' id="menu"></i>
                </div>
                <ul className="nav_lsit">
                    <li>
                        <input type="text" placeholder="search..." />
                        <i className='bx bx-search'></i>
                    </li>
                    <li>
                        <Link to="" onClick={forNews}>
                            <i className='bx bxs-news bx-sm' ></i>
                            <span className="links_name">news</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" onClick={forMyCart}>
                            <i className='bx bx-cart-add bx-sm'></i>
                            <span className="links_name">my cart</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className='bx bxs-user-plus bx-sm'></i>
                            <span className="links_name">add friend</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className='bx bxs-conversation bx-sm'></i>
                            <span className="links_name">messages</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" onClick={forInventory}>
                            <i className='bx bxs-store-alt bx-sm' ></i>
                            <span className="links_name">inventory</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" onClick={forWishlist}>
                            <i className='bx bx-home-heart bx-sm'></i>
                            <span className="links_name">wishlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className='bx bx-notification bx-sm'></i>
                            <span className="links_name">notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className='bx bxs-cog bx-sm'></i>
                            <span className="links_name">settings</span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/" onClick={setEvrything}> <i className='bx bx-log-out bx-sm' id='log_out'></i></Link>
                </div>
            </div>
        </div>
    )
}




export default UserSidebar
