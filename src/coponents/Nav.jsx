import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./components.css"
import Hamburger from './Hamburger';


function Nav() {
    const [isHam, setisHam] = useState(true);


    const handleHam = ()=>{
        setisHam(!isHam);

    }
  return (
    <>
        <nav>
            <a href="#">Divyanshu's Portfolio</a>
            <div onClick={handleHam}>{isHam?<GiHamburgerMenu />:<ImCross />}</div>
            
        </nav>
        {!isHam ? <Hamburger/> : <></>}
    </>
    
  )
}

export default Nav