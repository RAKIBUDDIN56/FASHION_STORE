import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">AdminPage</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav flex-lg-nowrap">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Categories</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create new Category</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/store" className="nav-link">Store Manager List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create new Store Manager</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/cust" className="nav-link">Customers List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

