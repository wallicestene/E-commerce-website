import { createContext, useContext, useState, } from "react";
import toast, { Toaster } from 'react-hot-toast';

const CartContext = createContext()


export const CartProvider = ({children}) =>{
    const [items, setItems] =useState([])
    const [amount, setAmount] = useState(0)
    const [addedtoCart, setAddedtoCart] = useState(false)

    const addToCart = () =>{
        if(amount > 0){
            setItems(items => [...items,   {
            price: 125,
            id: 1,
            name: 'Item 1',
            mainImagge: "./images1/image-product-1.jpg",
            description: 'Fall Limited Edition Sneakers',
        }])
        setAddedtoCart(true)   
        toast.success('Added To Cart')
        }
    }
    const removeFromCart = (itemId) => {
        setItems((items) => items.filter((item) => item.id !== itemId));
        setAddedtoCart(false)
      };
    // const removeFromCart = 
    return (
        <CartContext.Provider value={{items, addToCart, addedtoCart , amount, setAmount, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext