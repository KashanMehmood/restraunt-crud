import React, { Component } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

class RestaurantMake extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            address: "",
            rating: "",
            email: ""
        };

        this.submit = this.submit.bind(this);
    }

    submit() {
        fetch("http://localhost:3000/restaurant", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    name: "",
                    address: "",
                    rating: "",
                    email: ""
                })
                alert("Restaurant added");
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
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group align="left" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Enter Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group align="left" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <InputGroup>
                                    <FormControl value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }} as="textarea" placeholder="Enter Address" aria-label="With textarea" />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group align="left" controlId="formBasicPassword">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control value={this.state.rating} onChange={(e) => { this.setState({ rating: e.target.value }) }} type="text" placeholder="Enter Rating" />
                            </Form.Group>

                            <Form.Group align="left" controlId="formBasicCheckbox">
                                <Button variant="primary" type="button" onClick={this.submit}>Add</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantMake;