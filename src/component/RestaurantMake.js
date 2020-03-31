import React, { Component } from 'react';

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
        console.log(this.state);

        fetch("http://localhost:3000/restaurant", {
            method: "POST",
           
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state)

        })
            .then(response => response.json())
            .then((responseJson) => {
                alert("Restaurant added");

            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    render() {
        return (
            <div>
                RestaurantMake Component
                <br />
                <input onChange={(e) => { this.setState({ name: e.target.value }) }}
                    placeholder="Name"
                /> <br />
                <input onChange={(e) => { this.setState({ address: e.target.value }) }}
                    placeholder="Address"
                /><br />
                <input onChange={(e) => { this.setState({ rating: e.target.value }) }}
                    placeholder="Rating"
                /><br />
                <input onChange={(e) => { this.setState({ email: e.target.value }) }}
                    placeholder="Email"
                /><br />

                <button type="button" onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default RestaurantMake;