import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';
import { User } from './User';

export default function Header(props) {

  console.log('in header.js');

  let location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location])

  const myStyle = {
    display: 'flex',
    backgroundImage: `url(${props.image})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const textStyle = {
    color: 'whitesmoke'
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/about_us">about us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign_in">sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign_up">sign up</Link>
                </li>
              </ul>
              {props.showSearchBar ? <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> : ""}
            </div>
          </div>
        </nav>
      </div>
      {location.pathname === "/" ? <div style={myStyle}>
        <h1 className=" container" style={textStyle}> Welcome To VGDB </h1>
      </div> : (location.pathname === "/user" ? <User /> : "")}
    </>
  )
}

// press ctrl + h to see magic

Header.defaultProps = {
  title: "VGDB",
  showSearchBar: false,
  myNumber: 69
}

Header.protoTypes = {
  title: PropTypes.string,
  showSearchBar: PropTypes.bool,
  myNumber: PropTypes.number
}

