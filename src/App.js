import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restful, {FetchData} from "./tools/Restful"

import Home from './components/Home'

function App() {

  const [locations, setLocations] = useState()
  const [eventSpaces, setEventSpaces] = useState()

  useEffect(() => {
    const runEffect = async () => {
      Promise.all([FetchData('events_space'), FetchData('location')])
        .then(([eventSpaces, locations]) => {
          setLocations(locations)
          setEventSpaces(eventSpaces)
      })
      .catch(err => err)
    }
    runEffect()
    
  }, [setLocations])
  
  console.log(locations)
  console.log(eventSpaces)
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home Title="title" 
                  Locations={locations}
            />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
