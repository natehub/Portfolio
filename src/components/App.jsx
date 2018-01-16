import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import main from './pages/main.jsx';
import portfolio from './pages/portfolio.jsx';
import about from './pages/about.jsx';


const BasicExample = () => (
  
  <BrowserRouter>
    
    <div>
    <div className="nav menu-top pure-menu pure-menu-horizontal shadow">
    <ul className="nav_marg pure-menu-list">
        <li className="pure-menu-item"><Link to="/" className="menu-btn pure-menu-link nav_btn_color">CL</Link></li>
    </ul>
    <ul className="nav_marg pure-menu-list main_right">
        <li className="pure-menu-item"><Link to="/portfolio" className="menu-btn pure-menu-link nav_btn_color">Portfolio</Link></li>
        <li className="pure-menu-item"><Link to="/about" className="menu-btn pure-menu-link nav_btn_color">About</Link></li>
    </ul>
</div>
  
      <Route exact path="/" component={main}/>
      <Route path="/portfolio" component={portfolio}/>
      <Route path="/about" component={about}/>
    </div>
  </BrowserRouter>
  
)

/*const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)*/

export default BasicExample
