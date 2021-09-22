import React from 'react'

function Portfolio() {
  return (
    <div>
      <section className="content">
      <img src="./brady-profile.jpg" alt="" id='brady-photo'/>
      <div className="header-container">
        <h1>Portfolio</h1>
      </div>
      <section className="text-container">
        <img src="./pokemonApp.png" alt="" className="portfolio-image"/>
        <h2>Pokemon Team Builder</h2>
        <p>This web application made use of the PokeAPI for source data. It was built in HTML, CSS, JS, and Express for our server. We used axios calls and parsed through the response to display the data the user needed.</p>
        <div className="button-container">
          <button>Github</button>
          <button>Demo Video</button>
          <button>Live Site</button>
        </div>
      </section>
    </section>
    </div>
  )
}

export default Portfolio
