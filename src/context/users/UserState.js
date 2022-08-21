import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) =>{
    const [userState, setUserState] = useState(true);
    const updateUserState = (updatedState) =>{
        setUserState(updatedState);
    }
    return(
        <UserContext.Provider value = {{userState, updateUserState}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;