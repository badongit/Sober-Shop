import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Collection from './pages/Collection';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from 'pages/Contact';
import Team from 'pages/Team';
import Auth from 'features/Auth';
import { useDispatch } from 'react-redux';
import { getUser } from 'features/Auth/authSlice';
import Checkout from "./pages/Checkout";

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
   
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/sober/collection" component={Collection}></Route>
                    <Route path="/sober/products" component={Product}></Route>
                    <Route path="/sober/cart" component={Cart}></Route>
                    <Route path="/sober/checkout" component={Checkout}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/team" component={Team}></Route>
                    <Route path="/user" component={Auth} />
                </Switch>
            </div>
        </Router>
        
    );
}

export default App;