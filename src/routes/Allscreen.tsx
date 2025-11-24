import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Staticlayout from '../layout/Staticlayout'
import About from '../pages/About'
import Services from '../pages/Services'
import Work from '../pages/Work'
import Webdev from '../pages/Webdev'
import Mobiledev from "../pages/Mobiledev" 
import LetsTalk from '../pages/LetsTalk'

const Allscreen: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<Staticlayout/>}>
          <Route index element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Work' element={<Work/>} />
          <Route path='/About' element={<About />} />
          <Route path='/LetsTalk' element={<LetsTalk/>}/>
          <Route path='/Webdev' element={<Webdev/>}/>
          <Route path='/Mobiledev' element={<Mobiledev/>}/>
          <Route/>
        </Route>
      </Routes>
    </>
  );
}

export default Allscreen