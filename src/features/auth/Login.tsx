import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {api} from "../../services/api";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate()

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('before login')
        api.post('auth/login', { username, password }).then( res => {
            nav('/dashboard')
        }).catch(err => {
            console.error('There was an error logging in!', err);
        })
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
