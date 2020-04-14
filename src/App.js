import React from 'react';
import './App.css';
import Home from "./component/Home";
import RestaurantList from "./component/RestaurantList";
import RestaurantMake from "./component/RestaurantMake";
import RestaurantSearch from "./component/RestaurantSearch";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantUpdate from "./component/RestaurantUpdate";
import Login from "./component/Login";
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHome, faPlus, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Logout from './component/Logout';

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
                <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                <Nav.Link href="/list"><FontAwesomeIcon icon={faList} /> List</Nav.Link>
                <Nav.Link href="/create"><FontAwesomeIcon icon={faPlus} /> Add</Nav.Link>
                <Nav.Link href="/search"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
                {/* <Nav.Link href="/detail"><FontAwesomeIcon  icon={faInfoCircle} /> Detail</Nav.Link> */}
                {/* <Nav.Link href="/update"><FontAwesomeIcon  icon={faPencilAlt} /> Update</Nav.Link> */}

                {
                  localStorage.getItem('login') ?
                    <Nav.Link href="/logout"><FontAwesomeIcon icon={faSignInAlt} /> Logout</Nav.Link>
                    :
                    <Nav.Link href="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                }
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
