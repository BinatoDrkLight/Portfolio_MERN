import React from 'react'
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
      <div className='text-default min-h-screen text-gray-700 bg-white scroll-smooth'>
        <Toaster />
        <Routes>
          <Route path='/' element={<Portfolio />}/>
        </Routes>
      </div>
  )
}

export default App

