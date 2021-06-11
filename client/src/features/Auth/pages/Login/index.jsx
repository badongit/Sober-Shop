import authApi from 'api/authApi';
import { LOCAL_STORAGE } from 'constants/global';
import { getUser } from 'features/Auth/authSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import RegisterForm from 'features/Auth/components/RegisterForm';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdClear } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.scss';

function Login(props) {
    const [select, setSelect] = useState('login');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLoginSubmit = async (values, actions) => {
        try {
            const loginData = await authApi.login(values);

            if(loginData.success) {
                localStorage.setItem(LOCAL_STORAGE.accessToken, loginData.accessToken);
                localStorage.setItem(LOCAL_STORAGE.refreshToken, loginData.refreshToken);

                await dispatch(getUser());

                history.push('/auth/my-account');
            } else {
                console.log(loginData.message);
                
                actions.resetForm({
                    values: {
                        username: values.username,
                        password: '',
                    },
                    errors: {
                        username: loginData.message,
                    },
                    touched: {
                        username: true,
                    },
                });

            }
        } catch (error) {
            console.log(error);
        }

    };

    const handleRegisterSubmit = async (values, actions) => {
        try {
            const registerData = await authApi.register(values);

            if(registerData.success) {
                localStorage.setItem(LOCAL_STORAGE.accessToken, registerData.accessToken);
                localStorage.setItem(LOCAL_STORAGE.refreshToken, registerData.refreshToken);

                await dispatch(getUser());

                history.push('/auth/my-account');
            } else {
                console.log(registerData.message);
                
                actions.resetForm({
                    values: {
                        username: values.username,
                        email: values.email,
                        password: '',
                        confirmPassword: '',
                    },
                    errors: {
                        username: registerData.message,
                    },
                    touched: {
                        username: true,
                    },
                });

            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="login">
            <div className="login_header">
                <h2>My Account</h2>
                <IconContext.Provider value={{ size: '2em' }}>
                    <MdClear />
                </IconContext.Provider>
            </div>
            <div className="login_main">
                <div className="login_main_redirect">
                    <button onClick={() => setSelect('login')} className={ select === 'login' ? 'btn-active' : ''} >LOGIN</button>
                    <button onClick={() => setSelect('register')} className={ select === 'register' ? 'btn-active' : ''} >REGISTER</button>
                </div>
                <div className="login_main_content">
                    <LoginForm select={select} onSubmit={handleLoginSubmit} />
                    <RegisterForm select={select} onSubmit={handleRegisterSubmit} />
                </div>
            </div>
        </div>
    );
}

export default Login;