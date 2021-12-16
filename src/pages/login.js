import React from 'react';
import {useState,useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import FireBaseContext from '../context/firebase';


 const Login = () => {
    const { firebase } = useContext(FireBaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const invalid = password === '' || email === '';
    const handleLogin = () => {
    };
    useEffect(() => {
        document.title = 'Login-Instagram';
    }, []);

    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
             <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="" />
             </div>
             <div className="flex flex-col w-2/5">
                <p>i will be the form</p>
             </div>
        </div>
    )
}

export default Login;