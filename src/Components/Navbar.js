import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios'
import EachProduct from "../pages/EachProduct";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);
export default class Navbar extends Component {
    state = {
        isOpen: false,
        count:0

    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    componentDidMount() {
        axios.get('http://localhost:5000/cart/')
            .then(response => {
                this.setState({count  : response.data.length})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/Cart/">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={this.state.count} color="secondary" showZero>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>

                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/Product">Products</Link></li>
                        <li><Link to="/categories-list.component/">Categories</Link></li>
                        <li><Link to="/create-categories.component/">New Category</Link></li>
                        <li><Link to="/register.component">New Customer</Link></li>
                        <li><Link to="/customer-list.component/">Customers</Link></li>
                        <li><Link to="/create-store-manager.component/">new Manager</Link></li>
                        <li><Link to="/store-manager-list.component/">Manager</Link></li>
                        {/*<li><Link to="//">CreateStoreManager</Link></li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}
