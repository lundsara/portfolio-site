import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div class="container">
          <header>

      <p id='title'><Link to="/about">Sarah Lund</Link></p>
        <nav>
       <ul>
         <li class="options"><Link to="/projects">Projects</Link></li>
         <li class="options"><Link to="/about">About</Link></li>
         <li class="specific"><Link to="/contact">Contact</Link></li>
       </ul>
      </nav>
      </header>
      <div id="contact">
     <p> Let's get in touch! </p>

     <p class="sociallink"> <a href="mailto:sarah.christine.lund@gmail.com"><span class="highlight">email:</span> sarah.christine.lund@gmail.com</a></p>
     <p class="sociallink"> <a href="https://twitter.com/slund_nyc"><span class="highlight">twitter:</span> @slund_nyc</a></p>
     <p class="sociallink"> <a href="https://www.linkedin.com/in/sarah-c-lund/"><span class="highlight">linkedin:</span> www.linkedin.com/in/sarah-c-lund</a></p>
    </div>
    </div>
    );
  };
}

export default Contact;
