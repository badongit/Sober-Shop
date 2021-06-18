import authApi from 'api/authApi';
import Loading from 'components/Loading/Loading';
import { LOCAL_STORAGE } from 'constants/global';
import { getUser } from 'features/Auth/authSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import RegisterForm from 'features/Auth/components/RegisterForm';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './Login.scss';

function Login(props) {
    const [select, setSelect] = useState('login');
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isAuthLoading = useSelector(state => state.auth.isAuthLoading);

    
   

    const body = isAuthLoading ? ( <div className="page-loading"><Loading backgroundColor="black" /></div>) :
         isAuthenticated ? <Redirect to='/auth/my-account' /> : 
         (
            <div className="login">
                <div className="login_header">
                    <h2>My Account</h2>
                    <IconContext.Provider value={{ size: '2em' }}>
                        <MdClear onClick={() => history.push('/')}/>
                    </IconContext.Provider>
                </div>
                <div className="login_main">
                    <div className="login_main_redirect">
                        <button onClick={() => setSelect('login')} className={ select === 'login' ? 'btn-active' : ''} >LOGIN</button>
                        <button onClick={() => setSelect('register')} className={ select === 'register' ? 'btn-active' : ''} >REGISTER</button>
                    </div>
                    <div className="login_main_content">
                        <LoginForm select={select} />
                        <RegisterForm select={select} />
                    </div>
                </div>
            </div>
        );
        

    return body;
}

export default Login;