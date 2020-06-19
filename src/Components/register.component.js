import React, {Component} from 'react';
import Title from './Title';
import axios from "axios";

export default class registerComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
        this.onChangeLast_name = this.onChangeLast_name.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            mobile:''
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

    onChangeMobile(e){
        this.setState({
            mobile: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            mobile:this.state.mobile
        };

        console.log(user);

        axios.post('http://localhost:5000/register/add', user)
            .then(res => console.log(res.data));

        this.setState({
            first_name : '',
            last_name : '',
            email : '',
            username : '',
            password : '',
            mobile:''
        })
        window.location="/register";
    }
    render() {
        return (
            <section className="log"><br/>
                <Title title="Signup"/>
                <form className="Signupform" onSubmit={this.onSubmit}>
                    <table>

                        <tr>
                            <td><label>First Name </label></td>
                            <td><input type="text" placeholder="First name" required  value={this.state.first_name} onChange={this.onChangeFirst_name}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Last Name </label></td>
                            <td><input type="text" placeholder="Last Name" required value={this.state.last_name} onChange={this.onChangeLast_name}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Email </label></td>
                            <td><input type="text" placeholder="Enter email" required value={this.state.email} onChange={this.onChangeEmail}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Username </label></td>
                            <td><input type="text" placeholder="User name" required value={this.state.username} onChange={this.onChangeUsername}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Password </label></td>
                            <td><input type="password" placeholder="Enter Password" required value={this.state.password} onChange={this.onChangePassword}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td><label>Mobile </label></td>
                            <td><input type="number" placeholder="" required value={this.state.mobile} onChange={this.onChangeMobile}/></td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </table>
                    <button type="submit" className="btn-primary">REGISTER</button>
                </form>
            </section>
        );
    }
}
