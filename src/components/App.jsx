import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import main from './pages/main.jsx';
import projects from './pages/projects.jsx';
import travel from './pages/travel.jsx';


const BasicExample = () => (
  
  <BrowserRouter>
    
    <div>
      <div className="grad">
        
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Projects</Link></li>
          <li><Link to="/topics">Travel</Link></li>
        
      </div>
      <Route exact path="/" component={main}/>
      <Route path="/about" component={projects}/>
      <Route path="/topics" component={travel}/>
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
