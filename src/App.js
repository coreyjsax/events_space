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
  const [menu, setMenu] = useState()
  const [items, setItems] = useState()
  const [tags, setTags] = useState()

  const menuId = '5df839139acb21180961d550'

  useEffect(() => {
    const runEffect = async () => {
      Promise.all([FetchData('events_space'), FetchData('location'), FetchData('menu', menuId), FetchData('item'), FetchData('tag')])
        .then(([eventSpaces, locations, menu, items, tags]) => {
          setLocations(locations)
          setEventSpaces(eventSpaces)
          setMenu(menu)
          setItems(items)
          setTags(tags)
      })
      .catch(err => err)
    }
    runEffect()
    
  }, [setLocations])
  
  console.log(locations)
  console.log(eventSpaces)
  console.log(menu)
  return (
    <Router>
      <div>
        

        
        <Switch>
         
          
            <Home Title="title" 
                  Locations={locations}
                  EventSpaces={eventSpaces}
                  Menu={menu}
                  Items={items}
                  Tags={tags}
            />
          
         
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
