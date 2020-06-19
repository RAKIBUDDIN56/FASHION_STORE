import React, {Component} from 'react';
import Title from './Title'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Product from "../pages/Product";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.findname=this.findname.bind(this);
        this.findtype=this.findtype.bind(this);
        this.findpass=this.findpass.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state = {
            usertype:'',
            username:'',
            password:''
        }
    }

    findtype(e){
        this.setState({
            usertype: e.target.value
        })
    }

    findname(e){
        this.setState({
            username: e.target.value
        })
    }

    findpass(e){
        this.setState({
            password: e.target.value
        })
    }

    onsubmit(e){
        e.preventDefault();

        const login = {
            usertype: this.state.usertype,
            username: this.state.username,
            password: this.state.password,
        }
        console.log(login)

        axios.post('http://localhost:5000/login/login',login)
            .then(res => console.log(res.data));


        this.setState({
            usertype:'',
            username:'',
            password:''
        })
    }

    render() {
        return (
            <section className="log">
                <Title title="Login"/>
                <form className="logform">
                    <table>
                        <tr>
                            <td><label>User Type </label></td>
                            <td><select value={this.state.usertype} onChange={this.findtype}>
                                <option>Adminitrator</option>
                                <option>Store Manager</option>
                                <option>Customer</option>
                            </select></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>User Name </label></td>
                            <td><input type="text" placeholder="User name" required value={this.state.username} onChange={this.findname}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Password </label></td>
                            <td><input type="password" placeholder="Enter password" required value={this.state.findpass} onChange={this.findpass}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </table>
                    <Link to={"/Product/"} className="btn-primary" onClick={this.onsubmit}>LOGIN</Link>
                </form>
            </section>
        );
    }
}
