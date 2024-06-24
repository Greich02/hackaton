import React, { useState } from 'react';
import { Box, Typography, TextField, Fab, Link, Alert } from "@mui/material";
import { AccountBalanceRounded } from "@mui/icons-material";
import { Link as RouterLink, useNavigate as useHistory } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (username.trim().length < 3) {
            setError('Username must be at least 3 characters long.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await axios.post('/api/signup', { email, username, password });
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/quiz');
        } catch (err) {
            setError('Error during signup. Please try again.');
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
                    Sign up and get started
                </Typography>
            </Box>
            <Box marginTop={15} component="form" onSubmit={handleSignup}>
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
                        id="username"
                        label="USERNAME"
                        variant="standard"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        SIGN UP
                    </Fab>
                </Box>
                <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
                    <Link component={RouterLink} to="/login" variant="body1">
                        Already have an account? Click here to login
                    </Link>
                </Box>
            </Box>
        </div>
    );
}

export default Signup;
