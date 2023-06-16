import {useContext, useState} from "react";
import CartContext from "./CartContext.jsx";

const Header = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div className={"flex-col flex container items-center pb-4 pt-1 md:flex-row md:justify-between border border-black"}>
            <span>Ecommerce Store</span>
            {cartQuantity > 0 ?
                <>
                    <button className={"w-24 h-10 rounded-md bg-blue-700 text-white text-xs"}>Cart <span>({cartQuantity})</span> </button>
                </>
                 : <button className={"w-24 h-10 rounded-md bg-blue-700 text-white "}>Cart</button>}

        </div>
    );
};

export default Header;