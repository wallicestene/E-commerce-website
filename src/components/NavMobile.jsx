import React, { useState } from 'react'
import NavbarOptions from './NavbarOptions'
import close from "../images/icon-close.svg"

const NavMobile = ({handleShow}) => {

    const [show, setShow] = useState(true)

  return (
    <>
    {show && <div className='fixed z-50 top-0 left-0 bg-white w-52 border   md:hidden h-screen'>
        <div className='ml-8'>
        <img src={close} alt="" className='w-5 mt-4 hover:cursor-pointer' onClick={handleShow}/>
            <div className="mt-10 flex flex-col justify-center">
              <ul>
                <li className='li text-black'><NavbarOptions title = "Collections"/></li>
                <li className='li'><NavbarOptions title = "Men"/></li>
                <li className='li'><NavbarOptions title = "Women"/></li>
                <li className='li'><NavbarOptions title = "About"/></li>
                <li className='li'><NavbarOptions title = "Contact"/></li>
              </ul> 
                </div>
        </div>
    </div>}
    </>
  )
}

export default NavMobile