import React, { useState } from 'react';
import { Box, Typography, TextField, Fab, Link, Alert } from "@mui/material";
import { AccountBalanceRounded } from "@mui/icons-material";
import { Link as RouterLink, useNavigate as useHistory } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await axios.post('/api/login', { email, password });
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/chatlist');
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <div>
            <Box align="center" paddingTop={4}>
                <AccountBalanceRounded />
                <Typography variant="h4" color="primary" paddingTop={3}>
                    Welcome to ChatApp
                </Typography>
                <Typography variant="h5" color="textSecondary">
                    Sign in to continue
                </Typography>
            </Box>
            <Box marginTop={25} component="form" onSubmit={handleLogin}>
                <Box sx={{ paddingLeft: 3, paddingRight: 3 }}>
                    <TextField
                        id="email"
                        label="EMAIL"
                        variant="standard"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box sx={{ paddingLeft: 3, paddingRight: 3, paddingTop: 5 }}>
                    <TextField
                        id="password"
                        label="PASSWORD"
                        variant="standard"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                {error && (
                    <Box sx={{ paddingLeft: 3, paddingRight: 3, paddingTop: 2 }}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                )}
                <Box display="flex" justifyContent="center" sx={{ marginTop: 5 }}>
                    <Fab variant="extended" color="primary" sx={{ width: 500 }} type="submit">
                        SIGN IN
                    </Fab>
                </Box>
                <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
                    <Link component={RouterLink} to="/signup" variant="body1">SIGNUP FOR AN ACCOUNT</Link>
                </Box>
            </Box>
        </div>
    );
}

export default Login;
