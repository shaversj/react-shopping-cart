import {createContext, useState} from 'react';

export const CartContext = createContext(null)

export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    {/*
        Cart contains a list of CartItem objects
        CartItem = {id: number, quantity: number}
    */}

    function getItemQuantity(id) {
        {/*Find quantity of single product in cart. Return 0 if no quantity exists*/
        }
        return cartItems.find(item => item.id === id)?.quantity || 0
    }


    function increaseCartQuantity(id) {
        {/*
        Case 1: Add CartItem to cart if the product does not exist in cart.
        Case 2: If product exist in Cart, increment quantity by 1
        Case 3: Return item without any changes

        */
        }
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id) {
        {/*
        Case 1: Remove item from Cart if quantity equals 1.
        Case 2: If product exist in Cart, decrease quantity by 1
        Case 3: Return item without any changes
        */
        }
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }


    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)


    return (
        <CartContext.Provider
            value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext