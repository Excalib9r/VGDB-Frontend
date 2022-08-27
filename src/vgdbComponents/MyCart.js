import React, { useContext } from 'react'
import CartGame from './CartGame'
import GameContext from '../context/games/GameContext'

const MyCart = () => {

  const games = useContext(GameContext)
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);

  const placeOrder = () => {
    axios.post("",{

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

  return (
    <div >
      <div className='orderBox'>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Game Id</th>
              <th scope="col">Game Title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              (games.myGames).map((game) => {
                return (<tr><td scope="row">{game.id}</td>
                  <td>{game.title}</td>
                  <td>{game.price}</td></tr>)
              })
            }
            <tr className="table-info">
              <th colSpan="2">Total Price</th>
              <th >20$</th>
            </tr>
          </tbody>
        </table>
      </div>

      <form className="d-flex">
        <p className='text-white m-2'>Choose Way of Payment</p>
        <div className="p-1 mx-2">
          <select id="inputState" className="form-control">
            <option>Credit Card</option>
            <option>Visa Card</option>
            <option>Master Card</option>
          </select>
        </div>
        <div className="p-1 mx-4">
          <button type="submit" className="btn btn-success" onClick={placeOrder}>Place Order</button>
        </div>
      </form>
      <div className='forGames'>
        {
          (games.myGames).map((game) => {
            return (
              <CartGame key={game.id} image={game.photo} title={game.title} price={game.price} />
            )
          })
        }
      </div>
    </div>
  )
}

export default MyCart
