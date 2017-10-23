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

 <p class="projectlink"> <a target="_blank" href="http://electrician-gary-84651.bitballoon.com">Maison Candide</a></p>
   <a target="_blank" href="http://electrician-gary-84651.bitballoon.com"><img class="big" src="https://i.imgur.com/02ANO9R.png"/></a>

       <p class="projectlink"> <a target="_blank" href="https://github.com/lundsara/mood_diary">Mood Diary</a></p>
    <a target="_blank" href="https://github.com/lundsara/mood_diary"><img class="big" src="https://i.imgur.com/W8XuXV4.png"/></a>

        <p class="projectlink"> <a target="_blank" href="https://class-critique.herokuapp.com">Class Critique</a></p>
    <a target="_blank" href="https://class-critique.herokuapp.com/"><img class="big" src="https://i.imgur.com/tC1NxAX.png"/></a>

   <p class="projectlink"> <a target="_blank" href="http://security-administrator-wallace-20772.bitballoon.com/">American Art Afficianado Trivia</a></p>
  <a target="_blank" href="http://security-administrator-wallace-20772.bitballoon.com/"><img class="big" src="https://i.imgur.com/tVEikzq.png"/></a>


   <p class="projectlink"> <a target="_blank" href="https://github.com/lundsara/tweeder">Tweeder</a></p>
   <a target="_blank" href="https://github.com/lundsara/tweeder"><img class="big" src="https://i.imgur.com/cIOB3MG.png"/></a>

    </div>

    </div>
    );
  };
}

export default Projects;
