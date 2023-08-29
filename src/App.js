import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import CreateProduct from './components/products/CreateProduct';
import ProductAdmin from './components/products/ProductAdmin';
import ProductList from './components/products/ProductList';
import UpdateProduct from './components/products/UpdateProduct';


function App() {
  return (
    <div className="">
      <Router>
    
                   <Navbar/>
                   <Switch>
                       <Route exact path="/" component={Home}/>
                       <Route exact path="/products/list" component={ProductList}/>
                       <Route exact path="/products/admin" component={ProductAdmin}/>
                       <Route exact path="/products/create" component={CreateProduct}/>
                       <Route exact path="/products/:id" component={UpdateProduct}/>
                   </Switch>
               </Router>

    </div>
  );
}

export default App;
