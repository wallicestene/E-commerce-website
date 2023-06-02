import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../CartContext'
import remove from "../images/icon-delete.svg"

const Cart = () => {
  // const {items, addToCart, removeFromCart } = useCart()
  const {items, amount, removeFromCart} =useContext(CartContext)
  const [inCart, setIsInCart] = useState(false)
  const total = items.length > 0 ? items[0].price * amount : 0

  useEffect(() =>{

  },[])
  return (
    <div className="cart bg-white rounded-lg px-2 -z-40 shadow-xl min-h-36 h-fit absolute top-38 md:top-38 md:right-10 left-auto right-auto md:left-auto md:w-96 w-full">
      <div className="cart-top">
        <h1 className='p-3 border-b-2 font-bold text-verydarkblue'>Cart</h1>
      </div>
      {
        items.length > 0  ? (
          <>
      <div className="cart-mid flex gap-1 md:gap-5 p-3">
        <div className="mid-left">
          <img src={items[0].mainImagge} alt="" className='h-16 w-16 object-contain rounded-xl'/>
        </div>
        <div className="mid-center flex flex-col">
          <p className='font-bold text-gray-500 text-sm'>{items[0].description}</p>
          <p className='font-bold text-gray-500 text-sm'>${items[0].price}.00 x {amount} <strong className=' text-verydarkblue'>${total.toLocaleString()}.00</strong></p>
        </div>
        <div className="mid-right ml-auto">
          <img src={remove} alt="" className='w-5 h-6 object-contain hover:cursor-pointer' onClick={() => removeFromCart(items[0].id)}/>
        </div>
      </div>
      <div className="cart-bottom">
        <button className='bg-Orange py-2 px-4  w-full  text-white rounded-lg shadow mt-5 md:mt-0 hover:bg-orange-600 transition-all duration-200 mb-3'>Check Out</button>
      </div>
      </>
        ) : (
        <div>
      <h2 className=' text-center p-14 font-bold text-gray-500'>Your Cart is empty</h2>
      </div>
        )
      }
      
        
        </div>
  )
}

export default Cart