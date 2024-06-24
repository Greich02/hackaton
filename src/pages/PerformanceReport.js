import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
/*import { Bar } from 'react-chartjs-2';*/
import ResponsiveBottomBar from '../components/ResponsiveAppBar';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const errorsData = {
  grammar: [
    { message: "He go to school.", error: "Incorrect verb form", suggestion: "He goes to school." },
    { message: "She don't like it.", error: "Incorrect verb form", suggestion: "She doesn't like it." },
  ],
  spelling: [
    { message: "I recieved the letter.", error: "Spelling error", suggestion: "I received the letter." },
    { message: "It's definately a mistake.", error: "Spelling error", suggestion: "It's definitely a mistake." },
  ],
  conjugation: [
    { message: "She have finished her work.", error: "Incorrect conjugation", suggestion: "She has finished her work." },
    { message: "He is play football.", error: "Incorrect conjugation", suggestion: "He is playing football." },
  ]
};

const totalMessages = 150;
const totalErrors = errorsData.grammar.length + errorsData.spelling.length + errorsData.conjugation.length;
const dailyScore = ((totalMessages - totalErrors) / totalMessages * 100).toFixed(2);

const performanceData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Score',
      data: [95, 90, 85, 80, 93, 88, 92],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

function PerformanceReport() {
  return (
    <div>
        <ResponsiveAppBar title="Performance report"/>
        <Container sx = {{mt : 15}}>
        <Box sx={{ mt: 10, mb: 5 }}>
            <Paper sx={{ p: 2, mb: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <Typography variant="h6" color ="primary">Total Messages</Typography>
                <Typography variant="h6">{totalMessages}</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="h6" color ="primary" >Total Errors</Typography>
                <Typography variant="h6">{totalErrors}</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="h6" color ="primary">Daily Score</Typography>
                <Typography variant="h6">{dailyScore}%</Typography>
                </Grid>
            </Grid>
            </Paper>

            <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
                List of Errors
            </Typography>
            <Divider />
            <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Grammar</Typography>
                <List>
                {errorsData.grammar.map((error, index) => (
                    <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                        primary={`Message: ${error.message}`}
                        secondary={
                        <>
                            <Typography component="span" variant="body2" color="textPrimary">
                            Error: {error.error}
                            </Typography>
                            {` — Suggestion: ${error.suggestion}`}
                        </>
                        }
                    />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <Typography variant="h6" sx={{ mt: 2 }}>Spelling</Typography>
                <List>
                {errorsData.spelling.map((error, index) => (
                    <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                        primary={`Message: ${error.message}`}
                        secondary={
                        <>
                            <Typography component="span" variant="body2" color="textPrimary">
                            Error: {error.error}
                            </Typography>
                            {` — Suggestion: ${error.suggestion}`}
                        </>
                        }
                    />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <Typography variant="h6" sx={{ mt: 2 }}>Conjugation</Typography>
                <List>
                {errorsData.conjugation.map((error, index) => (
                    <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                        primary={`Message: ${error.message}`}
                        secondary={
                        <>
                            <Typography component="span" variant="body2" color="textPrimary">
                            Error: {error.error}
                            </Typography>
                            {` — Suggestion: ${error.suggestion}`}
                        </>
                        }
                    />
                    </ListItem>
                ))}
                </List>
            </Box>
            </Paper>

            <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
                Performance Graph
            </Typography>
            {/*<Bar
                data={performanceData}
                options={{
                scales: {
                    y: {
                    beginAtZero: true,
                    max: 100,
                    },
                },
                }}
            />*/}
            </Paper>

            <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
                Tips and Resources
            </Typography>
            <Typography variant="body1" gutterBottom>
                - Practice makes perfect. Make sure to review your mistakes and learn from them.
            </Typography>
            <Typography variant="body1" gutterBottom>
                - Use online tools and resources to improve your grammar, spelling, and conjugation skills.
            </Typography>
            <Typography variant="body1" gutterBottom>
                - Consider taking a language course to enhance your proficiency.
            </Typography>
            </Paper>
        </Box>
        </Container>
        <ResponsiveBottomBar page = "report"/>
    </div>
  );
}

export default PerformanceReport;
