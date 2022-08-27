import React from 'react'

const CartGame = (props) => {
    const myStyle = {
        width: "24.5rem"
    }
    return (
        <div className='d-inline-flex'>
            <div className="card bg-dark bg-gradient hoveringGame" style={myStyle}>
                <img className="card-img-top forEachGame" src={props.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-white border border-info rounded-1">{props.title} : price {props.price}$</h5>
                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-success">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartGame
