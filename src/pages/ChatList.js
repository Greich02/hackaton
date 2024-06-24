import React, { useState, useEffect } from 'react';
import { Typography, Box, Avatar, Badge, Grid, Link, IconButton } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ResponsiveSearchBar from "../components/ResponsiveSearchBar";
import ResponsiveBottomBar from "../components/ResponsiveBottomBar";

// JSON par défaut pour tester le fonctionnement
const defaultChats = [
    {
        id: 1,
        name: "John Doe",
        lastMessage: "There's no message yet. You'll know if there is",
        avatarColor: deepPurple[500],
        time: "16:39",
        unreadCount: 4,
    },
    {
        id: 2,
        name: "Jane Smith",
        lastMessage: "Looking forward to our meeting.",
        avatarColor: deepOrange[500],
        time: "15:22",
        unreadCount: 2,
    },
    // Ajoutez plus de données de test si nécessaire
];

function ChatList() {
    const [chats, setChats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Remplacer par votre API
        axios.get('/api/chats')
            .then(response => {
                setChats(response.data);
            })
            .catch(error => {
                console.error('Error fetching chats:', error);
                // Utiliser les données par défaut en cas d'erreur
                setChats(defaultChats);
            });
    }, []);

    return (
        <div>
            <ResponsiveAppBar title="Messages" />
            <ResponsiveSearchBar sx={{ mt: 15, mb: 5, mr: 3 }} />
            {chats.map(chat => (
                <Link component={RouterLink} to={`/chat/${chat.id}`} color="inherit" underline="none" key={chat.id}>
                    <Box sx={{ flexGrow: 1, mb: 5 }}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={1.25}>
                                <Avatar sx={{ bgcolor: chat.avatarColor, pt: 0 }}>{chat.name[0]}</Avatar>
                            </Grid>
                            <Grid item xs={8.75}>
                                <Typography variant="subtitle2" fontSize='0.75rem' sx={{ pl: 1.5 }}>
                                    {chat.name}
                                </Typography>
                                <Typography variant="body2" fontSize='0.75rem' sx={{ pl: 1.5 }}>
                                    {chat.lastMessage}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" fontSize='0.75rem' sx={{ pt: 0.70 }}>
                                    {chat.time}
                                </Typography>
                                <Badge badgeContent={chat.unreadCount} color="primary" sx={{ pl: 2.5 }}></Badge>
                            </Grid>
                        </Grid>
                    </Box>
                </Link>
            ))}
            <ResponsiveBottomBar page = "chat" />
        </div>
    );
}

export default ChatList;
