import React from 'react'
import { Link } from 'react-router-dom';
import UserScreen from './UserScreen';
import { Games } from './Games';


export const User = () => {
    return (
        <div>
            <div className="container">
                <div className="sidebar">
                    <div className="profile">
                        <div className="profile_logo">
                            <i className='bx bxs-user' ></i>
                            <div className="profile_name">profile</div>
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
                            <Link to="">
                                <i className='bx bxs-news' ></i>
                                <span className="links_name">news</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bx-calendar-event' ></i>
                                <span className="links_name">events</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bxs-user-plus'></i>
                                <span className="links_name">add friend</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bxs-conversation'></i>
                                <span className="links_name">messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bxs-store-alt' ></i>
                                <span className="links_name">inventory</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bx-home-heart'></i>
                                <span className="links_name">wishlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bx-notification'></i>
                                <span className="links_name">notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className='bx bxs-cog'></i>
                                <span className="links_name">settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <Link to="/"> <i className='bx bx-log-out' id='log_out'></i></Link>
                    </div>
                </div>
            </div>
            <div>
                <UserScreen />
            </div>
        </div>
    )
}
