import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div class="container">
        <header>

      <p id='title'><Link to="/about">Sarah Lund</Link></p>
        <nav>
       <ul>
         <li class="options"><Link to="/projects">Projects</Link></li>
         <li class="specific"><Link to="/about">About</Link></li>
         <li class="options"><Link to="/contact">Contact</Link></li>
       </ul>
      </nav>
      </header>

      <div id="about">
      <img class="circle" src="https://pbs.twimg.com/profile_images/921846498454917120/3EbdHIAk_400x400.jpg"/>
      <p id="me"> Hello, my name is<span class="highlight"> Sarah Lund</span> and I am a NYC-based web developer!
       I am a <span class="highlight">visual</span> and <span class="highlight">analytical</span> thinker who enjoys bringing <span class="highlight">creative</span> solutions
      to modern web applications.
      Please explore my projects and get in touch if you are interested in working <span class="highlight">together!</span></p>

  <path d="M38.301 154.693c38.525 2.084 75.399-14.437 90.708-52.33 15.31-37.893 10.976-59.2-26.608-91.64C64.817-21.72 23.097 26.816 7.787 64.71c-15.31 37.893-8.01 87.9 30.514 89.982z" fill="#09FA90" fill-rule="evenodd" fill-opacity=".85"></path>


<p id="title2"> ────────  Skills  ──────── </p>
      <div id="skills">
      <p>Javascript, HTML5, CSS3, React,</p>
      <p>Node.js, Express.js, Ruby on Rails,</p>
      <p>SQL, PostgreSQL, Firebase,</p>
      <p>Git, Github, Unix</p>
      </div>
     <p id="resume"> For more details on my background and experience <br/> please see my <span class="highlight"><a target="_blank" href="https://resume.creddle.io">resume</a></span></p>

    </div>

    </div>

    );
  };
}

export default About;
