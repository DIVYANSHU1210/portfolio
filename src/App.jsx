import { useState } from 'react'
import Nav from './coponents/Nav'
import { Route, Routes } from 'react-router-dom'
import Profile from './coponents/profile'
import Projects from './coponents/projects'
import Contacts from './coponents/contacts'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path = "/" element={<Profile/>}/>
        <Route path = "/my-projects" element={<Projects/>}/>
        <Route path = "/contact-me" element={<Contacts/>}/>
      </Routes>
      
    </>
  )
}

export default App
