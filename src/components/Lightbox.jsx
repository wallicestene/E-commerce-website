import React from 'react'
import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import close from "../images/icon-close.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AnimatePresence, motion } from 'framer-motion';

const Lightbox = ({products, value, handlePrevious, handleNext, handleLightbox}) => {
    const {mainImagge} = products[value]
  return (
    <div className='article text-white bg-black bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 z-50'>
        <img src={close} alt="" onClick={handleLightbox} className='w-5 absolute z-50 top-10 right-5 cursor-pointer'/>
        <div className='flex items-center justify-center h-screen '>
            
            <div className='relative'>
    
                 <img src={mainImagge} alt="" className='md:rounded-2xl md:w-full  object-contain'
                 style={{
                    height: "500px"
                }}
                /> 
             <ul className=''>
                <li onClick={handlePrevious}>
                    <button  className='bg-gray-200 rounded-full p-1 absolute left-4 top-1/2 -translate-y-1/2 text-verydarkblue'>
                    {/* <img src={previous} alt="" /> */}
                    <ArrowBackIosNewOutlined/>
                    </button></li>
                <li onClick={handleNext}>
                    <button className='bg-gray-200 rounded-full p-1 absolute right-4 top-1/2 -translate-y-1/2 text-verydarkblue'>
                    <ArrowForwardIosIcon/>
                    </button></li>
             </ul>
        </div>
            </div>
        
    </div>
  )
}

export default Lightbox