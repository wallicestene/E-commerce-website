import React, { useContext, useState } from 'react'
import minus from "../images/icon-minus.svg"
import add from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"
import next from "../images/icon-next.svg"
import previous from "../images/icon-previous.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { itemsData } from '../itemsData'
import { data } from "../data"
import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import Lightbox from './Lightbox'
import CartContext from '../CartContext'
import toast, { Toaster } from 'react-hot-toast';

const Hero = () => {
    const {addToCart, items, amount, setAmount} = useContext(CartContext)
console.log(items, amount)


    const [products, setProducts] = useState(data)
    const [value, setValue] = useState(0)
    const [showLightbox, setShowLightbox] = useState(false)

    const {mainImagge} = products[value]
    
   

    const handleNext = () =>{
        if(value < products.length - 1){
            setValue(value + 1)
        }else{
            setValue(0)
        }
    }
    const handlePrevious = () =>{
        if(value > 0){
            setValue(value - 1)
        }else{
            setValue(products.length - 1)
        }
    }
     
    const handleLightbox = () =>{
        setShowLightbox(!showLightbox)
    }
  return (
    <main className=''>
{/* Same as */}
        {
         showLightbox &&   <Lightbox products={products} handleNext={handleNext} handlePrevious={handlePrevious} value={value}
         handleLightbox={handleLightbox}
         />
        }
  
    <section className='mx-w-7xl  md:ml-10 -z-50 absolute mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-10 md:mr-10 md:place-items-center md:py-10'>
        
        <article className='md:ml-20 '>
             <div className='relative'>
             <img src={mainImagge} alt="" className='w-full md:w-4/4 md:rounded-2xl cursor-pointer' onClick={handleLightbox}/>
             <ul className='md:hidden'>
                <li onClick={handlePrevious}>
                    <button  className='bg-gray-200 rounded-full p-1 absolute left-4 top-1/2 -translate-y-1/2'>
                    {/* <img src={previous} alt="" /> */}
                    <ArrowBackIosNewOutlined/>
                    </button></li>
                <li onClick={handleNext}>
                    <button className='bg-gray-200 rounded-full p-1 absolute right-4 top-1/2 -translate-y-1/2'>
                    <ArrowForwardIosIcon/>
                    </button></li>
             </ul>
             </div>
            <ul  className=' hidden md:flex items-center justify-start gap-5 flex-wrap mt-5'>
                {
            products.map((product, index) => (
                
                    <li key={product.id} onClick={() => setValue(index)} className={`${index === value && "border-2 border-Orange opacity-50"} border-2 rounded-2xl overflow-hidden cursor-pointer`}>
                        <img src={product.thumbnail} alt="" className='w-20 rounded-xl'/>
                    </li>
                
            ))
         }
         </ul>
        </article>
       <article className='px-8 md:px-2 pb-10'>
        <h2 className='bg-slate-100 py-1 px-2 text-Orange uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10'>Snickers Company</h2>
        <h1 className='text-slate-900 mb-10 font-bold text-3xl md:text-4xl'>Fall Limited Edition Sneakers</h1>
        <p className='text-slate-600 mb-10 leading-relaxed'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='flex flex-wrap items-center justify-between md:flex-col md:items-start md:gap-2'>
            <ul className='flex items-center gap-5'>
                <li className='text-slate-900 font-bold text-2xl'>$125.00</li>
                <li className='bg-orange-50 py-1 px-2 text-Orange uppercase tracking-wide text-sm font-bold inline-block rounded shadow'>50%</li>
            </ul>
            <p className='text-slate-600 text-sm'><s>$250.00</s></p>
        </div>
        <div className='mt-10 md:flex items-center justify-between gap-2 '>
            <ul className='flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow md:flex-1'>
                <li onClick={() => setAmount(prev => {
                    if (prev <= 0) {
                        return 0
                    }else{
                        return prev - 1
                    }
                })} className='cursor-pointer'>
                    <img src={minus} alt="" className='w-5'/>
                </li>
                <li>{amount}</li>
                <li onClick={() => setAmount(prev => prev + 1)} className='cursor-pointer'>
                    <img src={add} alt="" className='w-5'/>
                </li>
            </ul>
            <div className='md:flex-1'>
                 <button className='flex items-center justify-center gap-4 bg-Orange py-2 px-4  w-full  text-white rounded-lg shadow mt-5 md:mt-0 hover:bg-orange-600 transition-all duration-200'  onClick={addToCart}>
                <img src={cart} alt=""/>
                Add to Cart
                </button>
            </div>
        </div>
       </article>
    </section>
    </main>
  )
}

export default Hero