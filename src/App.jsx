//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import './Navbar.css'
import Image from './Image'
import Header from './Header'
import Paragraph from './Paragraph'



function App() {
  
  function TopNavbar() {
    return (
      
  <div className="navbar">s
<div className="Port">
  <h2>Portfolio.</h2>
</div>
   <ul>
     <li><a href="/">Home</a></li>
     <li><a href="/">About Me</a></li>
     <li><a href="/contact">Contact</a></li>
   </ul>
 </div>
);
}

  return (
    <>
     <TopNavbar/> 
    <Image/>
    <Header/>
    <h1 className="typewriter"><Typewriter text="I am Ashmika Verma" delay={100}/></h1>
    <Paragraph/>
   
    </>
    
  )
  }
export default App
