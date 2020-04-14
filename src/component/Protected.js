import React from 'react';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHome, faPlus, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
const Protected = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('login') ? (
                <Component {...props} />
            ) : (
                    <div className="mt-4">
                        <h3>You need to login first            
                            <Nav.Link href="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                        </h3>
                        {/* <Redirect
                            to="./login"
                        /> */}
                    </div>
                )
        }
    />
);
export default Protected;