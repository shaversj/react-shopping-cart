import {useContext, useState} from "react";
import CartContext from "./CartContext.jsx";

const Product = ({product}) => {
    const [productInCart, setProductInCart] = useState(false)
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useContext(CartContext)
    const quantity = getItemQuantity(product.id)
    function handleButtonClick() {
        setProductInCart(!productInCart)
    }

    return (
        <div className={"w-[240px] min-h-[250px] border border-gray-300 grid place-items-center text-sm box-border"}>
            <img src={product.image} alt={""} className={"w-28 h-28 pt-1"}/>
            <h1 className={"text-xs text-center font-bold pt-2"}>{product.title}</h1>
            <p className={"text-md"}>${product.price}</p>
            {quantity === 0 ?
                <button className={"w-24 h-10 rounded-md bg-blue-700 text-white"} onClick={() => increaseCartQuantity(product.id)}>Add to
                    Cart</button> :

                <div>s
                    <div className={"flex gap-4 items-center"}>
                        <span>In Cart: {quantity}</span>
                        <button className={"w-10 h-10 text-xs rounded-md bg-blue-700 text-white ml-20"} onClick={() => decreaseCartQuantity(product.id)}>-</button>
                        <button className={"w-10 h-10 text-xs rounded-md bg-blue-700 text-white"} onClick={() => increaseCartQuantity(product.id)}>+</button>
                    </div>
                    <div className={"flex items-center justify-center pt-4 pb-4"}>
                        <button className={"w-32 h-10 rounded-md bg-red-700 text-white "}
                                onClick={() => removeFromCart(product.id)}>Remove from cart
                        </button>
                    </div>
                </div>}

            <div>

            </div>


        </div>
    );
};

export default Product;