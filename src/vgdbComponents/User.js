import React, { useEffect, useState } from 'react'
import UserNav from './UserNav';
import UserScreen from './UserScreen';
import UserSidebar from './UserSidebar';
import axios from 'axios';



export const User = () => {

    const[userName, setUserName] = useState("")

    //updated
    // const token = JSON.parse(localStorage.getItem('token'));
    // console.log(token);

    // useEffect(() => {
    //     axios.get("http://localhost:5001/api/login/auth", {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         const json = response.data
    //         console.log(json);
    //         setUserName(data.userName)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, [])


    console.log('in user.js');
    return (
        <div>
            <UserSidebar userName = {userName} />
            <UserNav />
            <UserScreen />
        </div>
    )
}
