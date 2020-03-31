import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class RestaurantList extends Component {

    constructor() {
        super();
        this.state = {
            list: null
        };
    }

    componentDidMount() {
        setInterval(()=> this.getMovies(), 1000)
    }
    
    async getMovies(){
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
                <h1>Restaurant List</h1>
                {this.state.list ? <div className="container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.map((item, index) =>
                                <tr>
                                    <td key={item.id}>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.rating}</td>


                                </tr>
                            )}
                        </tbody>
                    </Table>


                </div> : 'Loading...'}
            </div>
        );
    }
}

export default RestaurantList;