import { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
  

  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App



