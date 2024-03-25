import React from 'react'
import spotify from "./images/spotify.png"
import airbnb from "./images/airbnb.png"
import podcast from "./images/podcast.png" 
function Projects() {
  return (
    <div className='projects'>
        <a href='https://divyanshu1210.github.io/spoify-clone/#' target='_blank' className='project'>
            <img src={spotify} alt="" />
            <div>
                <h1>Spotify Clone</h1>
                <h4>html, css</h4>
            </div>
        </a>

        <a href='https://f3-airbnb-clone-l9v5ek1qc-divyanshus-projects-92937caa.vercel.app/' target='_blank' className='project'>
            <img src={airbnb} alt="" />
            <div>
                <h1>Airbnb Clone</h1>
                <h4>html, css, vanilla js</h4>
            </div>
        </a>

        <a href='https://steady-biscuit-40e0a2.netlify.app/'  target='_blank' className='project'>
            <img src={podcast} alt="" />
            <div>
                <h1>Podcast app</h1>
                <h4>react, redux, firebase</h4>
            </div>
        </a>
        
        
        
    </div>
  )
}

export default Projects;