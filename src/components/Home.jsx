import React from 'react'

function Home() {
  return (
    <div id="parent-of-content">
      <section className='content'>
        
      <div className="intro-container">
        <div className="image-container">
          <img src="./brady-profile.jpg" alt="" id='brady-photo'/>
          <div className="social-links">
            <a href="https://github.com/DaTrueBrad" target="_blank"><i class='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/bradybott/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>
            <a href="https://www.instagram.com/bottbrady/" target="_blank"><i class='bx bxl-instagram-alt' ></i></a>
            <a href="https://www.facebook.com/bottbrady" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
          </div>
        </div>
        <div className="article-text">
          <div className="intro-text-container">
            {/* <h1 className="hello-text">Welcome! I'm</h1> */}
            <h1 className="intro-text">Brady Bott</h1>
            <h1 className="intro-text">Full-stack Engineer</h1>
          </div>
        <section className="text-container-welcome">
          <p>I am a Student Web Developer of Dev Mountain in Lehi, UT. My stack includes:</p>
          <div className="tech-container">
            <ul>
              <li>PostgresSQL</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Jest</li>
              <li>Redux</li>
            </ul>
          </div>
          <p>So what are you waiting for?? Click the menu and find out more!</p>
        </section>
      </div>
    </div>
    </section>
    </div>
    
  )
}

export default Home
