import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Header() {
 
   
  return (
    <>
      <div className='cursor-pointer h-[4rem]  w-full font-bold text-center p-3 bg-[#923292] flex justify-evenly fixed left-0 right-0'>
     <NavLink  to="/galaxy" className={({isActive})=>` block text-3xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-5xl text-center  duration-200 ${isActive ? "text-[#3b7fcb]" : "text-white"}`
     }>
        Galaxy
     </NavLink>
      <NavLink  to="/" className={({isActive})=>`cursor-pointer  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-white"}`
     }>
        Home
     </NavLink>
  <NavLink  to="/newarrivals" className={({isActive})=>`cursor-pointer  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-white"}`
     }>
        New Arrivals
     </NavLink> 
     <NavLink  to="/formal" className={({isActive})=>`cursor-pointer  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-white"}`
     }>
       Formal
     </NavLink>  
     <NavLink  to="/partywear" className={({isActive})=>`cursor-pointer block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-white"}`
     }>
        Party Wear
     </NavLink>  
     <NavLink  to="/bridals" className={({isActive})=>`cursor-pointer  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-[#3b7fcb]" : "text-white"}`
     }>
       Bridals
     </NavLink>  
     <NavLink  to="/weddingwear" className={({isActive})=>`cursor-pointer  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-blue-400" : "text-white"}`
     }>
        Wedding Wear
     </NavLink>   
     <NavLink  to="/jewelry" className={({isActive})=>`cursor-pointer  block trasition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-xl py-2 pr-4 duration-200 ${isActive ? "text-blue-400" : "text-white"}`
     }>
        Jewelry
     </NavLink>  
     </div>

     
      
    </>
  )
}
