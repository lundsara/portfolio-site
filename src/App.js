import React, { Component } from 'react';
import './App.css';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Nav from './components/partials/nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
render() {

  return (
    <div className='app'>

    <Router>
     <div>

         <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />

         </Switch>
        <Footer />
      </div>
    </Router>

  </div>
    );
  }

}

export default App;
