import React from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

function MessageInput() {
  const handleSend = () => {
    // Logique pour envoyer le message
    console.log("Message sent");
  };

  const handleUpload = () => {
    // Logique pour uploader un fichier
    console.log("Upload media");
  };

  const handleRecord = () => {
    // Logique pour enregistrer un audio
    console.log("Record audio");
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f9f9f9', borderTop: '1px solid #e0e0e0', position: 'fixed', bottom: 5, width : 500  }}>
      <IconButton onClick={handleUpload} color="primary" sx={{ mr: 1 }}>
        <AttachFileIcon />
      </IconButton>
      <TextField
        variant="outlined"
        placeholder="Type a message"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSend} color="primary">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton onClick={handleRecord} color="primary" sx={{ ml: 1 }}>
        <MicIcon />
      </IconButton>
    </Box>
  );
}

export default MessageInput;
