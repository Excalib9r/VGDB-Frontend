import React, { useContext } from 'react'
import IndGameContext from '../context/indGame/IndGameContext'

const IndGame = (props) => {

    const game = useContext(IndGameContext);
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);

    const addToCart = () => {
        axios.post("", {
            id : game.id
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            const json = response.data
            console.log(json);
        }).catch((err) => {
            console.log(err);
        })
    }

    const addToWishList = ()=>{
        axios.post("", {
            id: game.id
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            const json = response.data
            console.log(json);
        }).catch((err) => {
            console.log(err);
        })
    }

    const tableStyle = {
        width: "50rem"
    }
    const myStyle = {
        width: "24.5rem"
    }

    return (
        <div className='d-inline-flex'>
            <div className='m-2' style={tableStyle}>
                <div >
                    <h4 className="text-light bg-dark">{props.title}</h4>
                </div>
                <table className="table table-sm table-bordered border-info table-dark table-striped tableRowSpace">
                    <tbody>
                        <tr>
                            <td>Game Id</td>
                            <td>{game.id}</td>
                        </tr>
                        <tr>
                            <td>Game Title</td>
                            <td>{game.title}</td>
                        </tr>
                        <tr>
                            <td>Devoloper</td>
                            <td>{game.developer}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{game.publisher}</td>
                        </tr>
                        <tr>
                            <td>Supported Systems</td>
                            <td>{game.supportedsystem}</td>
                        </tr>
                        <tr>
                            <td>Played By</td>
                            <td>{game.playedby} users</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>{game.genre}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{game.rating}<span className="fa fa-star"></span></td>
                        </tr>
                        <tr>
                            <td>Release Date</td>
                            <td>{game.releasedate}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{game.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='m-4' style={myStyle}>
                <img className="card-img forEachGameInd" src={props.image} />
                <div className='d-inline-flex'>
                    <button type="button" className="m-2 btn btn-info" onClick={addToCart}><i className='bx bx-cart-add bx-sm'></i></button>
                    <button type="button" className="m-2 btn btn-info" onClick={addToWishList}>Addto Wishlist</button>
                    <button type="button" className="m-2 btn btn-info">Rate Game</button>
                </div>
                <div>
                    <h3 className="text-light bg-dark">{game.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default IndGame
