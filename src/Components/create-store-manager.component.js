import React, { Component } from 'react';
import axios from "axios";



export default class CreateStoreManager extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
        this.onChangeLast_name = this.onChangeLast_name.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            users:[]
        }

    }



    onChangeFirst_name(e){
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLast_name(e){
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            first_name : '',
            last_name : '',
            email : '',
            username : '',
            password : ''
        })
        window.location="/store";
    }


    render() {
        return (

            <div className='all'>
                <h3 className='all'>Create New Store Manager</h3>

                <form onSubmit={this.onSubmit} method="POST" action="/send">
                    <div className="form-group">
                        <label> First Name : </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.first_name}
                               onChange={this.onChangeFirst_name}
                        />
                    </div>

                    <div className="form-group">
                        <label> Last Name : </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.last_name}
                               onChange={this.onChangeLast_name}
                        />
                    </div>

                    <div className="form-group">
                        <label> Email : </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label> Username : </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                        />
                    </div>

                    <div className="form-group">
                        <label> Password : </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.password}
                               onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value = "Create Store Manager" className="btn btn-primary"/>
                    </div>

                </form>
            </div>

        )
    }
}
