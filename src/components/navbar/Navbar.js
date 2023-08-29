import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-warning navbar-expand-sm">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                        <i class="fa-solid fa-star"/> BigBasket</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products/list" className="nav-link">Products</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/products/admin"} className="nav-link">Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Navbar;
