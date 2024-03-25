import React from 'react'
import profilePic from "./images/Pic-min.jpg"

function Profile() {
  return (
    <>
        <img src={profilePic} alt="Profile pic"/>
        <div>
            <h1>Divyanshu Joshi</h1>
            <h5>Software Developer</h5>
            <p>Welcome to my portfolio! I'm Divyanshu, a passionate frontend developer with a keen 
                eye for design and a commitment to crafting engaging user experiences. With a background 
                in [mention any relevant education or experience], I specialize in turning ideas into intuitive 
                and visually stunning websites and web applications.</p>
            <div>
                <button>Projects</button>
                <button>Contact me</button>
            </div>
        </div>
    </>
  )
}

export default Profile