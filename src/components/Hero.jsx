import { Link } from "react-router-dom"

export default function Hero(){

  return(
    <>
    <div className = "hero" id="homeLink">
  
    <h1 className ="hej"> Hej! </h1>

    <h1 className="hero-text">
      Im Joshua Ng, a fullstack engineer, audio programmer and creative technologist based in Stockholm. I love building things & taking them apart,  <Link to="https://www.youtube.com/watch?v=J0B28_gwj0M&list=PL7GxGvr71rQ4otNEuVdwLHaBWwErfnPBJ" className="heroLinks" target="_blank">binge-watching history docs</Link> on YouTube, and baking a mean pizza 🍕 
      I explore the intersection of art and tech, and have worked on projects with brands like <Link to="https://www.sonicassembly.se/work/google-jacob-collier" className="heroLinks">Google</Link>  and <Link to="https://www.sonicassembly.se/work/click-click" className="heroLinks" target="_blank">Fujifilm</Link> 🚀 as well worked on fun DIY projects (like <Link to ="https://www.github.com/" className="heroLinks" target="_blank">building this MIDI controller</Link> for my dog, Elsie &#128021)
    </h1>
  </div>
    </>

    //Selected Projects
    //Contact Me
  )
  }