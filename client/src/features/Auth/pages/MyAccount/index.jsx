import { getUser } from 'features/Auth/authSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MyAccount(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    console.log(user);
    
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default MyAccount;