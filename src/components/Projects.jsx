import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class Projects extends Component {
  render() {
    return (

        <div className="container">
          <header>

      <p id='title'><Link to="/about"> Sarah Lund</Link></p>
        <nav>
       <ul>
         <li className="specific"><Link to="/projects">Projects</Link></li>
         <li className="options"><Link to="/about">About</Link></li>
         <li className="options"><Link to="/contact">Contact</Link></li>
       </ul>
      </nav>
      </header>
      <div id="projects">
      <p id="welcome">This is my project page!
      <br/>Please explore my recent work!</p>

      <p class="projectlink"> <a target="_blank" href="http://candide-beta.surge.sh/">Maison Candide</a></p>
 <p className="tech">  HTML, Javascript, Shopify SDK, CSS3 </p>
   <a target="_blank" href="http://candide-beta.surge.sh/"><img className="big" src="https://i.imgur.com/02ANO9R.png"/></a>




       <p className="projectlink"> <a target="_blank" href="https://mood-diary-scl.herokuapp.com/home">Mood Diary</a></p>
       <p className="tech">  React.js, IBM Watson API, Firebase </p>
    <a target="_blank" href="https://mood-diary-scl.herokuapp.com/home"><img className="big" src="https://i.imgur.com/W8XuXV4.png"/></a>

        <p className="projectlink"> <a target="_blank" href="https://class-critique.herokuapp.com">Class Critique</a></p>
        <p className="tech"> Node.js, Express.js, HTML5, CSS3, Javascript </p>
    <a target="_blank" href="https://class-critique.herokuapp.com/"><img className="big" src="https://i.imgur.com/tC1NxAX.png"/></a>

   <p className="projectlink"> <a target="_blank" href="http://art-aficionado.surge.sh">American Art Aficionado Trivia</a></p>
  <p className="tech"> HTML5, CSS3, Javascript </p>
  <a target="_blank" href="http://art-aficionado.surge.sh"><img className="big" src="https://i.imgur.com/tVEikzq.png"/></a>

   <p className="projectlink"> <a target="_blank" href="http://pick-your-own.surge.sh/">React Giphy</a></p>
   <p className="tech"> React.js, Giphy API, CSS3 </p>
   <a target="_blank" href="http://pick-your-own.surge.sh/"><img className="big" src="https://i.imgur.com/glJ728e.png" alt="giphypic"/></a>

  <p className="projectlink"> <a target="_blank" href="https://bshapiro.surge.sh">Portfolio Site</a></p>
  <p className="tech">  React.js, Javascript, CSS3 </p>
   <a target="_blank" href="https://bshapiro.surge.sh"><img className="big" src="https://i.imgur.com/jYP7UI1.png"/></a>


   <p className="projectlink"> <a target="_blank" href="https://scl-tweeder.herokuapp.com/">Tweeder</a></p>
   <p className="tech"> React.js, Node.js, Express.js, CSS3 </p>
   <a target="_blank" href="https://scl-tweeder.herokuapp.com/"><img className="big" src="https://i.imgur.com/cIOB3MG.png" alt="tweederpic"/></a>




    </div>

    </div>
    );
  };
}

export default Projects;
