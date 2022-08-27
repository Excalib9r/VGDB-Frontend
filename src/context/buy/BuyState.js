import React, { useState } from "react";
import BuyContext from "./BuyContext";

const BuyState = (props) => {
    const [buyState, setBuyState] = useState(false);
    const buyStateSet = (buy) => {
        setBuyState(buy);
    }
    return (
        <BuyContext.Provider value={{ buyState , buyStateSet}}>
            {props.children}
        </BuyContext.Provider>
    )
}

export default BuyState;