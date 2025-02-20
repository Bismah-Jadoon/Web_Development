import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import WeddingWear from './Components/WeddingWear/WeddingWear.jsx'
import PartyWear from './Components/PartyWear/PartyWear.jsx'

import NewArrivals from './Components/NewArrivals/NewArrivals.jsx'
import Formal from './Components/Formal/Formal.jsx'
import Home from './Components/Home/Home.jsx'
import MainPage from './Components/MainPage/MainPage.jsx'
import Jewelry from './Components/Jewelry/Jewelry.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Layout from './Layout/Layout.jsx'
import Bridals from './Components/Bridals/Bridals.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
    <Route path='galaxy' element={<MainPage/>}/>
      <Route path='newarrivals' element={<NewArrivals/>}/>
      <Route path='formal' element={<Formal/>}/>
      <Route path='partywear' element={<PartyWear/>}/>
      <Route path='bridals' element={<Bridals/>}/>
      <Route path='weddingwear' element={<WeddingWear/>}/>
      <Route path='jewelry' element={<Jewelry/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
