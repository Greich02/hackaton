import React, { useState } from 'react';
import {
  Box, TextField, Button, Typography, Checkbox, FormControlLabel, FormGroup, Container
} from '@mui/material';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ResponsiveBottomBar from '../components/ResponsiveBottomBar'

const personalityTraits = [
  'Friendly',
  'Professional',
  'Humorous',
  'Empathetic',
  'Knowledgeable'
];

function AddAgent() {
  const [agentName, setAgentName] = useState('');
  const [agentRole, setAgentRole] = useState('');
  const [selectedTraits, setSelectedTraits] = useState([]);

  const handleTraitChange = (event) => {
    const trait = event.target.name;
    setSelectedTraits(prev => 
      prev.includes(trait) ? prev.filter(t => t !== trait) : [...prev, trait]
    );
  };

  const handleSubmit = () => {
    const newAgent = {
      name: agentName,
      role: agentRole,
      traits: selectedTraits
    };
    console.log("New Agent:", newAgent);
    // Logique pour enregistrer le nouvel agent
  };

  return (
    <div>
        <ResponsiveAppBar title = "Add new agent"/>
        <Container sx={{mt : 10}} >
        <Box sx={{ mt: 5 }}>
            <Box component="form" sx={{ mt: 2 }}>
            <TextField
                fullWidth
                label="Agent Name"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Agent Role"
                multiline
                rows={4}
                value={agentRole}
                onChange={(e) => setAgentRole(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
                Personality Traits
            </Typography>
            <FormGroup>
                {personalityTraits.map(trait => (
                <FormControlLabel
                    control={<Checkbox checked={selectedTraits.includes(trait)} onChange={handleTraitChange} name={trait} />}
                    label={trait}
                    key={trait}
                />
                ))}
            </FormGroup>
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
                Add Agent
            </Button>
            </Box>
        </Box>
        </Container>
        <ResponsiveBottomBar page="addnew"/>
    </div>
  );
}

export default AddAgent;
