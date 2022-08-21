import React from 'react'

const IndGame = (props) => {
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
                            <td>101102</td>
                        </tr>
                        <tr>
                            <td>Game Title</td>
                            <td>{props.title}</td>
                        </tr>
                        <tr>
                            <td>Devoloper</td>
                            <td>CD PROJECT RED</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>CD PROJECT RED</td>
                        </tr>
                        <tr>
                            <td>Supported Systems</td>
                            <td>Windows</td>
                        </tr>
                        <tr>
                            <td>Played By</td>
                            <td>1000 users</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>Adventure</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td><span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span></td>
                        </tr>
                        <tr>
                            <td>Release Date</td>
                            <td>18 May 2015</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='m-4' style={myStyle}>
                <img className="card-img forEachGameInd" src={props.image} />
                <div className='d-inline-flex'>
                <button type="button" className = "m-2 btn btn-info">Buy</button>
                <button type="button" className = "m-2 btn btn-info">Addto Wishlist</button>
                <button type="button" className = "m-2 btn btn-info">Rate Game</button>
                </div>
                <div>
                    <h3 className="text-light bg-dark">Description</h3>
                </div>
            </div>
        </div>
    )
}

export default IndGame
