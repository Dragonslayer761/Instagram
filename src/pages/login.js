import React from 'react';
import {useState,useContext,useEffect} from 'react';
//import {useHistory} from 'react-router-dom';
import FireBaseContext from '../context/firebase';

function Login() {
    // const history = useHistory();
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
        <div>
            <p>login page i am</p>
        </div>
    );
}

export default Login;
