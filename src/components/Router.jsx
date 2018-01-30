import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    WithRouter
} from 'react-router-dom'

const StaticSite = () => (
  <Router>
    <div>
      <h1>Primeros pasos con react router</h1>
      <nav>
        <ul>
          <li> <Link to='/'> Home </Link> </li>
          <li> <Link to='/about'> About </Link> </li>
          <li> <Link to='/services'> Services </Link> </li>
          <li> <Link to='/contact'> Contact </Link> </li>
        </ul>
      </nav>
      <hr />
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact' component={Contact} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Hola Bienvenidos a mi WebApp React</h2>
  </div>
)

const About = () => (
  <div>
    <h2>Hola soy tu amigo Andres Felipe Alvarez</h2>
  </div>
)

const Services = () => (
  <ul>
    <li>WebApps</li>
    <li>Empresa</li>
    <li>Contactame</li>
  </ul>
)

const Contact = ({match}) => (
  <div>
    <h2>Info de contacto</h2>
  </div>
)

export default StaticSite