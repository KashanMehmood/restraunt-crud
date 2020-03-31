import React from 'react';
import './App.css';
import Home from "./component/Home";
import RestaurantList from "./component/RestaurantList";
import RestaurantMake from "./component/RestaurantMake";
import RestaurantSearch from "./component/RestaurantSearch";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantUpdate from "./component/RestaurantUpdate";

import { Navbar, Nav } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Resto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* you can also write this  */}
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/list">List</Nav.Link>
                <Nav.Link href="/create">Add</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/detail">Detail</Nav.Link>
                <Nav.Link href="/update">Update</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/detail">Details</Link>
              </li>
              <li>
                <Link to="/update">Update</Link>
              </li>
            </ul>
          </nav> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <RestaurantList />
            </Route>
            <Route path="/create">
              <RestaurantMake />
            </Route>
            <Route path="/search">
              <RestaurantSearch />
            </Route>
            <Route path="/detail">
              <RestaurantDetail />
            </Route>
            <Route path="/update/:id"
              render={(props) => <RestaurantUpdate {...props} />}
            >
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
