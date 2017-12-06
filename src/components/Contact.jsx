import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div className="container">
          <header>

      <p id='title'><Link to="/about">Sarah Lund</Link></p>
        <nav>
       <ul>
         <li className="options"><Link to="/projects">Projects</Link></li>
         <li className="options"><Link to="/about">About</Link></li>
         <li className="specific"><Link to="/contact">Contact</Link></li>

       </ul>
      </nav>
      </header>
      <div id="contact">
     <p> Let's get in touch! </p>

     <p className="sociallink"> <a href="mailto:sarah.christine.lund@gmail.com"><span className="highlight">email:</span> sarah.christine.lund@gmail.com</a></p>
     <p className="sociallink"> <a target="_blank" href="https://twitter.com/slund_nyc"><span className="highlight">twitter:</span> @slund_nyc</a></p>
     <p className="sociallink"> <a target="_blank" href="https://www.linkedin.com/in/sarah-c-lund/"><span className="highlight">linkedin:</span> www.linkedin.com/in/sarah-c-lund</a></p>
     <p className="sociallink"> <a target="_blank" href="https://angel.co/sarah-lund"><span className="highlight">angel list:</span> www.angel.co/sarah-lund</a></p>

    </div>
    </div>
    );
  };
}

export default Contact;
