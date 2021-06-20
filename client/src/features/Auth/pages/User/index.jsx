import Header from 'components/Header/Header';
import ProtectedRoute from 'components/routing/ProtectedRoute';
import MyAccount from 'features/Auth/components/MyAccount';
import UserMenu from 'features/Auth/components/UserMenu';
import Footer from 'layout/Footer/Footer';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './User.scss';

function User(props) {
    const match = useRouteMatch();
    
    return (
        <div className="user">
            <Header />
            <div className="user__menu">
                <UserMenu />
            </div>
            <Switch>
                <Route path={`${match.url}`} component={MyAccount} />
            </Switch>
            <Footer />
        </div>
    );
}

const UserWithPR = ProtectedRoute(User); 

export default UserWithPR;