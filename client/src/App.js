import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Collection from './pages/Collection';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product'
import Contact from 'pages/Contact';
import Team from 'pages/Team';
import Login from 'features/Auth/pages/Login'
import MyAccount from 'features/Auth/pages/MyAccount';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/sober/collection" component={Collection}></Route>
                    <Route path="/sober/products" component={Product}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/team" component={Team}></Route>
                    <Route path="/auth" exact component={Login} />
                    <Route path="/auth/my-account" component={MyAccount} />
                </Switch>
            </div>
        </Router>
        
    );
}

export default App;