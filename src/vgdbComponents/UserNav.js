import React, { useContext } from 'react'
import NavGameContext from '../context/navPage/NavGameContext';
import GameContext from '../context/games/GameContext';
import SideBarContext from '../context/sideBarPage/SideBarContext';

const UserNav = () => {

    // const navInfo = useContext(NavGameContext);
    const sidePage = useContext(SideBarContext);
    const game = useContext(GameContext);

    useEffect(() => {
        axios.get("http://localhost:5001/api/login/allgames").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(game.myGames);

    const sethome = () => {
        axios.get("http://localhost:5001/api/login/allgames").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        // navInfo.allGamesInfo(true);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(false);
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
    }

    const settoprated = () => {
        axios.get("http://localhost:5001/api/login/toprated").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(true);
        // navInfo.mostPlayedInfo(false);
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
    }

    const setmostplayed = () => {
        axios.get("http://localhost:5001/api/login/mostplayed").then((response) => {
            console.log(response.data)
            game.setGamesMyGames((response.data))
            console.log(game.myGames);
        }).catch((err) => {
            console.log(err);
        })
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(true);
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
    }

    const handleSubmit = () => {
        // navInfo.allGamesInfo(false);
        // navInfo.topRatedInfo(false);
        // navInfo.mostPlayedInfo(true);
        game.showGameInfo(false);
        sidePage.showInventory(false);
        sidePage.showWishlist(false);
        sidePage.showNews(false);
        sidePage.showMyCart(false);
    }

    return (
        <div className='accessories'>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item bg-white border border-success rounded-3 p-1 mx-1">
                                <button type="submit" className="btn btn-success" onClick={sethome}>Home</button>
                            </li>
                            <li className="nav-item bg-white border border-success rounded-3 p-1 mx-1">
                                <button type="submit" className="btn btn-success" onClick={settoprated}>Top Rated</button>
                            </li>
                            <li className="nav-item bg-white border border-success rounded-3 p-1 mx-1" >
                                <button type="submit" className="btn btn-success" onClick={setmostplayed}>Most Played</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNav
