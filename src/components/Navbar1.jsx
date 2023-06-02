import React, { useContext, useState } from 'react'
import NavbarOptions from './NavbarOptions'
import cart from "../images/icon-cart.svg"
import profile from '../images/image-avatar.png'
import menu from "../images/icon-menu.svg"
import NavMobile from './NavMobile1'
import Cart from './Cart'
import logo from "../images/logo.svg"
import CartContext from '../CartContext'
import { motion } from "framer-motion"
const Navbar1 = () => {
  const {items, amount, addedtoCart} =useContext(CartContext)

  const [isHidden, setIshidden] = useState(true)
  const [showCart, setShowCart] = useState(false)

 const handleShow = () =>{
    setIshidden(prev => !prev)
 } 
 const handleShowCart = () =>{
    setShowCart(prev => !prev)
 } 


  return (
    <div>
      <nav className="relative flex justify-between items-center h-16 border-b">
        <div className='navbar-left flex text-white justify-between gap-11 items-center'>
          <div className='flex justify-center items-center'>
            <img src={menu} alt="menu" className='md:hidden ml-5 mr-0 cursor-pointer' onClick={handleShow} />
            {!isHidden && <NavMobile handleShow={handleShow}/>}
            <img src={logo} alt="logo" className='ml-5 h-4 md:h-6 md:ml-10'/>
          </div>

          <div className="md:flex hidden gap-5">
            <NavbarOptions title="Collections" />
            <NavbarOptions title="Men" />
            <NavbarOptions title="Women" />
            <NavbarOptions title="About" />
            <NavbarOptions title="Contact" />
          </div>
        </div>
        <div className="navbar-right flex items-center justify-between gap-3 mr-10 ">
          <div className='relative'>
          <img src={cart} alt="" className='md:w-7 md:h-7 h-6 w-6 object-contain ml-5 cursor-pointer' onClick={handleShowCart}/>
          {
            addedtoCart  && <div className='absolute px-2 py-2 flex justify-center items-center md:h-5 md:w-5 h-5 w-5 text-sm md:text-md text-white -right-2 -top-2 text-center bg-orange-400 rounded-full'>{amount}</div>
          }
          </div>
          <img src={profile} alt="" className='w-8 md:md:w-9 md:h-9 object-contain cursor-pointer border rounded-full hover:border-2 hover:border-orange-500' />
        </div>
      </nav>
      {
        showCart && 
          <Cart/>
      }
    </div>
  )
}

export default Navbar1
