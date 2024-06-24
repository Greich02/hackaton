import React from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Switch, FormControlLabel, Select, MenuItem, InputLabel, Avatar } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ResponsiveBottomBar from '../components/ResponsiveBottomBar';

function SettingsPage() {
    return (
        <div>
            <ResponsiveAppBar title ="Settings"/>
            <Container sx={{ mt: 15 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Update your personal information and preferences.
                </Typography>
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Personal Information
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                                autoComplete="name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                autoComplete="new-password"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                Profile Picture
                            </Typography>
                            <Avatar sx={{ width: 56, height: 56, mb: 2 }}>U</Avatar>
                            <Button variant="contained" component="label">
                                Upload New Photo
                                <input type="file" hidden />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        Preferences
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="language-label">Language</InputLabel>
                            <Select
                                labelId="language-label"
                                id="language"
                                fullWidth
                                variant="outlined"
                                defaultValue=""
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="fr">French</MenuItem>
                                <MenuItem value="es">Spanish</MenuItem>
                                {/* Add more languages as needed */}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={<Switch color="primary" />}
                                label="Enable Email Notifications"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={<Switch color="primary" />}
                                label="Enable Push Notifications"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={<Switch color="primary" />}
                                label="Dark Theme"
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 5 }}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Cancel
                    </Button>
                </Box>

                <Box sx={{ mt: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        Security
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Manage your account security settings.
                    </Typography>
                    {/* Add security options here, e.g., 2FA, session management */}
                </Box>
            </Container>
            <ResponsiveBottomBar page="settings" />
        </div>
    );
}

export default SettingsPage;
