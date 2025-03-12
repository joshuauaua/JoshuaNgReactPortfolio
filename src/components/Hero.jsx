import { Link } from "react-router-dom"

export default function Hero(){

  return(
    <>
    <div className = "hero" id="homeLink">
  
    <h1 className ="hej"> Hej! </h1>

    <h1 className="hero-text">
      Im Joshua Ng, a fullstack developer and creative technologist based in Stockholm. I love building things & taking them apart.
      I explore the intersection of art and tech, and have worked on projects with brands like <Link to="https://www.sonicassembly.se/work/google-jacob-collier" className="hero-links" target="_blank">Google</Link>  and <Link to="https://www.sonicassembly.se/work/click-click" className="hero-links" target="_blank">Fujifilm</Link> 🚀 as well worked on fun DIY projects (like <Link to ="https://www.github.com/" className="hero-links" target="_blank">building this MIDI controller</Link> for my dog, Elsie 🐕)
    </h1>
  </div>
    </>
  )
  }