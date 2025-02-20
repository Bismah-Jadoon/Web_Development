import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
  <>

  <div className='grid grid-cols-3 gap-4 '>
      <figure className=' h-[39rem] w-[20rem] rounded-xl bg-[#923292] m-12 mt-24'>
        <img className='p-6 cursor-pointer ' src="https://i.pinimg.com/564x/4c/a8/8a/4ca88aeeaca66b496ff6a9c10cee941c.jpg" alt="" />
        <div>
          <blockquote>
           <NavLink className={'block transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#3b7fcb] text-center font-bold text-lg  text-white' } to="/newarrivals">New Arrivals</NavLink>
           <p className='text-base font-semibold pl-2  text-white'>Check out our newest female clothing arrivals! From chic dresses to comfy loungewear, discover trendy styles perfect for any occasion. Stay ahead in fashion with our latest collection—shop now!</p>
          </blockquote>
        </div>
      </figure>

      <figure className=' h-[39rem] w-[20rem] rounded-xl bg-[#923292] m-12  mt-24'>
        <img className='p-6 cursor-pointer ' src="https://i.pinimg.com/564x/22/1e/73/221e737587766e946e296dd5082f0152.jpg" alt="" />
        <div>
          <blockquote>
           <NavLink className={'block transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#3b7fcb] text-center font-bold text-lg  text-white' } to="/formal">Formal Dresses</NavLink>
           <p className='text-base font-semibold pl-2  text-white'>Explore our latest formal dresses! Elevate your elegance with our newest arrivals, designed to make a statement at any special occasion. Discover timeless sophistication and shop now!</p>
          </blockquote>
        </div>
      </figure> 

      <figure className=' h-[39rem] w-[20rem] rounded-xl bg-[#923292] m-12  mt-24'>
        <img className='p-6 cursor-pointer ' src="https://i.pinimg.com/564x/2e/07/2a/2e072a531ee22fbd67f8b7d03504baf1.jpg" alt="" />
        <div>
          <blockquote>
           <NavLink className={'block transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#3b7fcb] text-center font-bold text-lg text-white' } to="/partywear">Party Dresses</NavLink>
           <p className='text-base font-semibold pl-2 text-white'>Explore our latest formal dresses! Elevate your elegance with our newest arrivals, designed to make a statement at any special occasion. Discover timeless sophistication and shop now!</p>
          </blockquote>
        </div>
      </figure>   
      <figure className=' h-[39rem] w-[20rem] rounded-xl bg-[#923292] m-12'>
        <img className='p-6 cursor-pointer ' src="https://i.pinimg.com/564x/91/b7/fe/91b7fec123fed4cb18d9bbb736c20fc2.jpg" alt="" />
        <div>
          <blockquote>
           <NavLink className={'block transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#3b7fcb] text-center font-bold text-lg text-white' } to="/bridals">Bridal Dresses</NavLink>
           <p className='text-base font-semibold pl-2 pr-2 text-white'>"New arrivals in bridal dresses! Explore our latest collection, featuring stunning gowns perfect for your special day. Find your dream dress now!"</p>
          </blockquote>
        </div>
      </figure>

      <figure className=' h-[39rem] w-[20rem] rounded-xl bg-[#923292] m-12'>
        <img className='p-6 cursor-pointer ' src="https://i.pinimg.com/564x/fa/b5/d4/fab5d4d98c6e22e7f7328e5428236220.jpg" alt="" />
        <div>
          <blockquote>
           <NavLink className={'block transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#3b7fcb] text-center font-bold text-lg text-white' } to="/weddingwear">Wedding Wear</NavLink>
           <p className='text-base font-semibold pl-2 pr-2 text-white'>New arrivals in bridal dresses! Explore our latest collection, featuring stunning gowns perfect for your special day. Find your dream dress now!</p>
          </blockquote>
        </div>
      </figure>
      <figure className=' h-[39rem] w-[20rem] rounded-xl bg-[#923292] m-12'>
        <img className='p-6 cursor-pointer ' src="https://i.pinimg.com/564x/ca/96/3c/ca963c59c1c2c2ad3e60338e9698a94d.jpg" alt="" />
        <div>
          <blockquote>
           <NavLink className={'block transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#3b7fcb] text-center font-bold text-lg text-white' } to="/jewelry">Jewelry</NavLink>
           <p className='text-base font-semibold pl-2 pr-2 text-white'>Explore sophistication with our latest jewelry arrivals! From stunning necklaces to elegant earrings, discover pieces that elevate every look. Shop now and adorn yourself with timeless elegance.</p>
          </blockquote>
        </div>
      </figure>
      

      </div>
   

    
  </>
  )
}
