import React from 'react'
import Signİn from './Pages/Signİn'
import DashBoard from './Pages/DashBoard'
import { Route, Router, Routes } from 'react-router-dom'

function All() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Signİn/>}/>
       <Route path='/dashboard'element={<DashBoard/>}/>
    </Routes>  
    </>
  )
}

export default All