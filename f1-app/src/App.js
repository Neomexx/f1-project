import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js'

const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Routes>
    <Route path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
  </Routes>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

export default App;