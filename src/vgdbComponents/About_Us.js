import React from 'react'
import { Footer } from './Footer'
import Header from './Header'

export const About_Us = () => {
  let aboutUsStyle = {
    height: '90vh',
  }
  return (
    <>
    <Header/>
    <div style = {aboutUsStyle}>
      <div>
        <h1></h1>
        <h2 className="text-light bg-dark"> It's a Database Project</h2>
        <h3 className="text-light bg-dark"> It is basically a Game Store. Where anyone can buy games and join a community. A user can rate the game and do many things.</h3>
        <h2 className="text-light bg-dark">Well this project belongs to 1905080 and 1905063</h2>
        <h5 className="text-light bg-dark"> We Had to do everything from the scratch. It took a huge time to learn some concepts that were new by ourselves. The database queries were taught in the class and we are grateful for that. We are really happy that we could pull of this much. </h5>
        <hr/>
        <hr/>
        <h1 className="text-light bg-dark">Thank You</h1>
      </div>
    </div>
    <Footer/>
    </>
  )
}
