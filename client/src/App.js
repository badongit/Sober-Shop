import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Collection from './pages/Collection';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/sober/collection" component={Collection}></Route>
                </Switch>
            </div>
        </Router>
        
    );
}

export default App;