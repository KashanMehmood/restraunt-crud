import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

class RestaurantList extends Component {

    constructor() {
        super();
        this.state = {
            list: null
        };
    }

    componentDidMount() {
        // setInterval(()=> this.restaurant(), 0)
    // }
    
    // async restaurant(){
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list.map((item, index) =>
                                <tr key={index}>
                                    <td key={item.id}>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.rating}</td>
                                    <td>
                                        <Link to={"/update/"+item.id}><FontAwesomeIcon  icon={faEdit} /> </Link>
                                        <Link to={"/update/"+item.id}><FontAwesomeIcon  icon={faTrash} /> </Link>
                                    </td>


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