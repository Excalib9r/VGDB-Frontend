import React from 'react'
import Home from './Home';
import { About_Us } from './About_Us';
import { Sign_In } from './Sign_In';
import { Sign_Up } from './Sign_Up';
import { User } from './User';
import { Routes, Route } from 'react-router-dom'

export default function ManagedComponents() {

    console.log('in managedComponent.js');

    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/about_us" exact element={<About_Us />} />
                <Route path="/sign_in" exact element={<Sign_In />} />
                <Route path="/sign_up" exact element={<Sign_Up />} />
                <Route path="/User" exact element={<User />} />
            </Routes>
        </div>
    )
}
