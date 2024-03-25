import React from 'react'
import profilePic from "./images/Pic-min.jpg"
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();
    
    const handleProjectClick= ()=>{
        navigate("/my-projects")
    }


  return (
    <div className='profile'>
        <img src={profilePic} alt="Profile pic"/>
        <div className='discription'> 
            <h1>Divyanshu Joshi</h1>
            <h5>Software Developer</h5>
            <p>Welcome to my portfolio! I'm Divyanshu, a passionate frontend developer with a keen 
                eye for design and a commitment to crafting engaging user experiences. With a background 
                in [mention any relevant education or experience], I specialize in turning ideas into intuitive 
                and visually stunning websites and web applications.</p>
            <div style={{display : 'flex' ,gap:"1rem"}}>
                <button onClick={handleProjectClick}>Projects</button>
                <button onClick={()=>navigate("/contact-me")}>Contact me</button>
            </div>
        </div>
    </div>
  )
}

export default Profile