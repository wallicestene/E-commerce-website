import React from 'react'

const NavbarOptions = ({title}) => {
  return (
    <div>
        <ul>
            <li>
                <a href="#" className='text-gray-600 font-bold hover:border-b-2 hover:border-orange-500'>{title}</a>
            </li>
        </ul>
    </div>
  )
}

export default NavbarOptions