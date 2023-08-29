import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from "axios";

class ProductAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        this.getAllProducts();
    }

    // get All Products
    getAllProducts = () => {
        let dataURL = 'http://127.0.0.1:5000/api/products';
        Axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                products : response.data
            });
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage : error
            });
        });
    };

    // Delete Product
    deleteProduct = (productId) => {
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.delete(dataURL).then((response) => {
            this.getAllProducts();
        }).catch((error) => {
            console.error(error);
        });
    };

    render() {
        return (
            <div className="container mt-3">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Product Admin</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam, architecto beatae culpa cupiditate doloribus eligendi et fugiat hic impedit labore quidem quis repudiandae saepe sed soluta tenetur voluptates.</p>
                            <Link to='/products/create' className="btn btn-success btn-sm">Create New</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col animated zoomInLeft delay-1s">
                            <table className="table table-hover text-center table-success table-striped">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Product</th>
                                        <th>NAME</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    this.state.products.map((product) => {
                                                        return (
                                                            <tr key={product._id}>
                                                                <td>{product._id.substr(product._id.length - 5)}</td>
                                                                <td>
                                                                    <img src={product.image} alt="" width="50" height="50"/>
                                                                </td>
                                                                <td>{product.name}</td>
                                                                <td>&#8377; {product.price.toFixed(2)}</td>
                                                                <td>{product.qty} kgs</td>
                                                                <td>
                                                                    <Link to={`/products/${product._id}`} className="btn btn-secondary btn-sm">Update</Link>
                                                                    <button onClick={this.deleteProduct.bind(this , product._id)} className="btn btn-danger btn-sm">Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </React.Fragment> :
                                            <React.Fragment>
                                                <tr>
                                                    <td colSpan="6" className="text-danger font-weight-bold">----------- No Products Found --------- </td>
                                                </tr>
                                            </React.Fragment>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProductAdmin;
