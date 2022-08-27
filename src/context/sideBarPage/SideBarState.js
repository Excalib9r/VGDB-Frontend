import React, { useState } from "react";
import SideBarContext from "./SideBarContext";

const SideBarState = (props) => {
    const [inventory, setInventory] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [news, setNews] = useState(false);
    const [myCart, setMyCart] = useState(false);

    const showInventory = (Info) => {
        setInventory(Info);
    }
    const showWishlist = (Info) => {
        setWishlist(Info)
    }
    const showNews = (Info)=>{
        setNews(Info);
    }
    const showMyCart = (Info)=>{
        setMyCart(Info);
    }
    return (
        <SideBarContext.Provider value={{ inventory, wishlist, news, myCart, showInventory, showWishlist,  showNews, showMyCart}}>
            {props.children}
        </SideBarContext.Provider>
    )
}

export default SideBarState;