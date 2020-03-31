import React, { Component } from 'react';

class RestaurantUpdate extends Component {
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

    componentDidMount() {
        fetch("http://localhost:3000/restaurant/" + this.props.match.params.id)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    id: responseJson.id,
                    name: responseJson.name,
                    address: responseJson.address,
                    rating: responseJson.rating,
                    email: responseJson.email
                })
                console.log(responseJson)
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }


    submit() {
        console.log(this.state);

        fetch("http://localhost:3000/restaurant/"+this.state.id, {
            method: "PUT",

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state)

        })
            .then(response => response.json())
            .then((responseJson) => {
                alert("Restaurant Updated");

            })
            .catch(error => console.log(error)) //to catch the errors if any
    }


    render() {
        // console.log(this.state.name);
        return (
            <div>
                RestaurantUpdate Component

                <br />
                <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}
                    placeholder="Name"
                /> <br />
                <input type="text" value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }}
                    placeholder="Address"
                /><br />
                <input type="text" value={this.state.rating} onChange={(e) => { this.setState({ rating: e.target.value }) }}
                    placeholder="Rating"
                /><br />
                <input  type="text" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}
                    placeholder="Email"
                /><br />
                {/* <br />
                <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}
                    placeholder="Name"
                /> <br />
                <input type="text" value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }}
                    placeholder="Address"
                /><br />
                <input type="text" value={this.state.rating} onChange={(e) => { this.setState({ rating: e.target.value }) }}
                    placeholder="Rating"
                /><br />
                <input  type="text" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}
                    placeholder="Email"
                /><br /> */}

                <button type="button" onClick={this.submit}>Submit</button>


            </div>
        );
    }
}

export default RestaurantUpdate;