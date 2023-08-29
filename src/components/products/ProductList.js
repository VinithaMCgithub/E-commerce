import React, { Component } from 'react';
import axios from 'axios';

class ProductList extends Component {
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
        axios.get(dataURL).then((response) => {
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

    render() {
        return (
            <div className="container mt-3">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Product List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum expedita odio possimus quasi quo repellendus totam veritatis? Consequuntur corporis cumque debitis iure numquam officia placeat porro quaerat, reprehenderit rerum?</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.products.length > 0 ?
                                <React.Fragment>
                                    {
                                        this.state.products.map((product) => {
                                            return (
                                                <div className="col-md-3">
                                                    <div className="card animated jello delay-1s">
                                                        <div className="card-header text-center bg-white">
                                                            <img src={product.image} alt="" width="150" height="150"/>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-group">
                                                                <li className="list-group-item">
                                                                    NAME : {product.name}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Price : &#8377; {product.price.toFixed(2)}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Qty : {product.qty} Kgs.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </React.Fragment> :
                                <React.Fragment>
                                   <div className="text-center">
                                       <p className="text-danger font-weight-bold text-center">
                                           ----------- NO Products Found --------
                                       </p>
                                   </div>
                                </React.Fragment>
                        }
                    </div>
                </div>
        );
    }
}

export default ProductList;
