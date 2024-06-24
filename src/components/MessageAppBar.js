import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@mui/icons-material';
import { Avatar, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { MoreVertOutlined } from '@mui/icons-material';

export default function MessageAppBar() {
  return (
    <Box sx={{ flexGrow: 1, mb : 5 }}>
    <Grid container spacing={0.5} >
      <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"    
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 0 }}
                >
                    <ArrowBack />
                </IconButton>
                < Grid item xs={1} >
                    <Avatar sx={{bgcolor : deepPurple[500]}} >U</Avatar>
                </Grid>
                <Grid item xs={10} sx={{pl : 1}} >
                    <Typography variant="h6" component="div">
                        John Doe moetvh
                    </Typography>
                </Grid>
                <Grid item xs={0.5} >
                    <IconButton color = "inherit" >
                        <MoreVertOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>
            </AppBar>    
        </Grid>
    </Box>
  );
}
