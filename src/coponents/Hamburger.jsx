import React from 'react'
import "./components.css"
import { useNavigate } from 'react-router-dom'
function Hamburger({setisHam , isHam}) {

    const navigate = useNavigate(); 
    const handleNavigate = (path)=>{
        setisHam(!isHam);
        navigate(path);
    }

  return (
    <div className='ham-burger'>
        <p onClick={()=>handleNavigate("/")}>Profile Page</p>
        <p onClick={()=>handleNavigate("/my-projects")}>Projects</p>
        <p onClick={()=>handleNavigate("/contact-me")}>Contact me</p>
    </div>
  )
}

export default Hamburger