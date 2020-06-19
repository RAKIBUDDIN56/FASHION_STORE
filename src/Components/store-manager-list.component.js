import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const User = props => (
    <tr>
        <td>{props.user.first_name}</td>
        <td>{props.user.last_name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.username}</td>
        <td>{props.user.password}</td>

        <td>
            <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
        </td>
    </tr>


)



export default class storeManagerListComponent extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => console.log(res.data));

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    UsersList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser}
                             key={currentuser._id}/>;
        })

    }


    render() {
        return (
            <div className='all'>
                <h3 className='all'>Logged Store Managers</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.UsersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
