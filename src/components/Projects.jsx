import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class Projects extends Component {
  render() {
    return (

        <div class="container">
          <header>

      <p id='title'><Link to="/about"> Sarah Lund</Link></p>
        <nav>
       <ul>
         <li class="specific"><Link to="/projects">Projects</Link></li>
         <li class="options"><Link to="/about">About</Link></li>
         <li class="options"><Link to="/contact">Contact</Link></li>
       </ul>
      </nav>
      </header>
      <div id="projects">
      <p id="welcome">This is my project page! Please explore my recent work!</p>


       <p class="projectlink"> <a target="_blank" href="https://mood-diary-scl.herokuapp.com/home">Mood Diary</a></p>
       <p class="tech">  React.js, IBM Watson API, Firebase </p>
    <a target="_blank" href="https://mood-diary-scl.herokuapp.com/home"><img class="big" src="https://i.imgur.com/W8XuXV4.png"/></a>

        <p class="projectlink"> <a target="_blank" href="https://class-critique.herokuapp.com">Class Critique</a></p>
        <p class="tech"> Node.js, Express.js, HTML5, CSS3, Javascript </p>
    <a target="_blank" href="https://class-critique.herokuapp.com/"><img class="big" src="https://i.imgur.com/tC1NxAX.png"/></a>

   <p class="projectlink"> <a target="_blank" href="http://art-aficionado.surge.sh">American Art Aficionado Trivia</a></p>
  <p class="tech"> HTML5, CSS3, Javascript </p>
  <a target="_blank" href="http://art-aficionado.surge.sh"><img class="big" src="https://i.imgur.com/tVEikzq.png"/></a>

   <p class="projectlink"> <a target="_blank" href="http://boiling-arithmetic.surge.sh/">React Giphy</a></p>
   <p class="tech"> React.js, Giphy API, CSS3 </p>
   <a target="_blank" href="http://boiling-arithmetic.surge.sh/"><img class="big" src="https://i.imgur.com/glJ728e.png" alt="giphypic"/></a>

  <p class="projectlink"> <a target="_blank" href="https://bshapiro.surge.sh">Portfolio Site</a></p>
  <p class="tech">  React.js, Javascript, CSS3 </p>
   <a target="_blank" href="https://bshapiro.surge.sh"><img class="big" src="https://i.imgur.com/jYP7UI1.png"/></a>


   <p class="projectlink"> <a target="_blank" href="https://scl-tweeder.herokuapp.com/">Tweeder</a></p>
   <p class="tech"> React.js, Node.js, Express.js, CSS3 </p>
   <a target="_blank" href="https://scl-tweeder.herokuapp.com/"><img class="big" src="https://i.imgur.com/cIOB3MG.png" alt="tweederpic"/></a>


 <p class="projectlink"> <a target="_blank" href="http://candide-beta.surge.sh/">Maison Candide (In Development)</a></p>
 <p class="tech">  HTML, Javascript, Shopify SDK, CSS3 </p>
   <a target="_blank" href="http://candide-beta.surge.sh/"><img class="big" src="https://i.imgur.com/02ANO9R.png"/></a>



    </div>

    </div>
    );
  };
}

export default Projects;
