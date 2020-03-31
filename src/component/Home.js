import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/restaurant")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    list: responseJson,
                })
                console.log(this.state.list)
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    render() {

        return (
            <div>
                Home Component
            </div>
        );
    }
}

export default Home;