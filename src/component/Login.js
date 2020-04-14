import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
        this.submit = this.submit.bind(this);
    }
    
    submit() {
        console.log(this.state.email);
        console.log(this.state.password);
        fetch("http://localhost:3000/login/?email=" + this.state.email + "&password=" + this.state.password)
            .then(response => response.json())
            .then((responseJson) => {

                if (responseJson.length === 1) {
                    this.props.history.push('/list');
                } else {
                    alert("Your email or passwor is incorrect");
                }
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <Form>
                            <Form.Group align="left" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group align="left" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group align="left" controlId="formBasicCheckbox">
                                <Button variant="primary" type="button" onClick={this.submit}>Submit</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
// export default Login;