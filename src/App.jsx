import './App.css'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  
  

  return (
    <>
    <Header/>
  <Routes>
    <Route path='' Component={Landing}/>
    <Route path='/dashboard' Component={Dashboard}/>
    <Route path='/history' Component={History}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
