import React, { useState } from 'react'
import { MdCopyright } from "react-icons/md"
import { NavLink,Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
   <footer className='left-0 bottom-0  h-[10rem]'>

   
   <div className='grid grid-cols-3 bg-slate-300 gap-24'>
    <div>
    <h2 className='text-xl font-bold m-4'>
      Online Shopping Store
    </h2>
    <p className='flex gap-2 pt-2 m-2 p-2 '>Copyright <MdCopyright />Galaxy</p>
    <p className='m-2 '>You can Contact us at: <span className='hover:text-blue-600 underline to-blue-500'>galaxy@gmail.com</span></p>
    <p className='text-xs m-2 p-2 text-center'>Welcome to our world of style and elegance! At <span className='text-[#923292] font-bold'>Galaxy</span>, we're dedicated to curating a fashion-forward collection that empowers every woman to embrace her unique beauty. From trendy apparel to chic accessories, our online store is your one-stop destination for all things fabulous. Explore our carefully selected range designed to celebrate diversity, inspire confidence, and enhance your individuality. Enjoy a seamless shopping experience with us and step into a realm where fashion meets convenience. Happy shopping, gorgeous!</p>

    </div>

    <div className='flex m-2 p-2 text-center gap-2'>
    <input type="email" className='border-2  w-[24rem] rounded-xl p-3 h-12' placeholder='Enter your Email' />
    <button className='flex bg-[#923292] w-[6rem] h-[3rem] p-3 pl-5 rounded-xl text-white font-semibold '>Submit</button>
    
    </div>

    <div className='cursor-pointer '>
      <NavLink  to="/" className={({isActive})=>`cursor-pointer text-[#923292]  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-[#923292]"} hover:underline`
     }>
        Home
     </NavLink>
  <NavLink  to="/newarrivals" className={({isActive})=>`cursor-pointer text-[#923292]  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-[#923292]"} hover:underline`
     }>
        New Arrivals
     </NavLink> 
     <NavLink  to="/formal" className={({isActive})=>`cursor-pointer text-[#923292]  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-[#923292]"} hover:underline`
     }>
       Formal
     </NavLink>  
     <NavLink  to="/partywear" className={({isActive})=>`cursor-pointer text-[#923292] block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-[#923292]"} hover:underline`
     }>
        Party Wear
     </NavLink>  
     <NavLink  to="/bridals" className={({isActive})=>`cursor-pointer text-[#923292]  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-[#923292]"} hover:underline`
     }>
       Bridals
     </NavLink>  
     <NavLink  to="/weddingwear" className={({isActive})=>`cursor-pointer text-[#923292]  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-blue-400" : "text-[#923292]"} hover:underline`
     }>
        Wedding Wear
     </NavLink>   
     <NavLink  to="/jewelry" className={({isActive})=>`cursor-pointer text-[#923292]  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-blue-400" : "text-[#923292]"} hover:underline`
     }>
        Jewelry
     </NavLink>  
     
     
     
      </div>
    
    </div>
    </footer>


</>
)}