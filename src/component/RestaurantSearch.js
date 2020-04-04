import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

class RestaurantSearch extends Component {

    constructor() {
        super();
        this.state = {
            list: "",
            searchData: ""
        };
    }

    delete(itemId) {

        fetch("http://localhost:3000/restaurant/" + itemId, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then((responseJson) => {
                alert("Restaurant Deleted");
                this.getData();
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch("http://localhost:3000/restaurant")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({

                    list: responseJson,
                })
                // console.log(this.state.list)
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    searchData = (searchValue) => {
        console.log(searchValue);

        fetch("http://localhost:3000/restaurant/?q=" + searchValue)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    list: responseJson,
                })
                console.log(this.state.searchData)
            })
            .catch(error => console.log(error)) //to catch the errors if any

    }

    render() {
        return (
            <div>
                <h1>RestaurantSearch Component</h1>
                <div className="row d-flex justify-content-center pb-4">
                    <input className="form-control col-lg-4 " onChange={(e) => { this.searchData(e.target.value) }}
                        placeholder="Search"
                    />
                </div>

                <div>
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
                                            <Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} /> </Link>
                                            <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /> </span>
                                        </td>


                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div> : 'Loading...'}
                </div>
            </div>
        );
    }
}

export default RestaurantSearch;