import React, { useState } from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Card, Button, MobileStepper } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useNavigate as useHistory } from 'react-router-dom';
import axios from 'axios';

const questions = [
    {
        title: "What is your current level in the language you want to practice?",
        options: ["Beginner", "Intermediate", "Advanced", "Fluent"],
    },
    {
        title: "What are your main goals in learning this language?",
        options: ["Traveling", "Working in a professional environment", "Studying abroad", "Communicating with friends/family", "Culture and leisure"],
    },
    {
        title: "What types of communication situations do you want to practice? (select all that apply)",
        options: ["Everyday conversations", "Professional situations (meetings, presentations)", "Academic situations (class discussions, writing essays)", "Travel situations (booking a hotel, asking for directions)", "Socializing and making friends"],
    },
    {
        title: "What are your interests or passions that you would like to incorporate into your conversations? (select all that apply)",
        options: ["Sports", "Arts and culture", "Technology", "Cooking", "Politics", "Environment", "Others (please specify)"],
    },
    {
        title: "What is your preference in terms of tone and style of conversation with the agent?",
        options: ["Formal and professional", "Casual and friendly", "Humorous and playful"],
    }
];

function Quiz() {
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleCheckboxChange = (question, option) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: {
                ...prevAnswers[question],
                [option]: !prevAnswers[question]?.[option]
            }
        }));
    };
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/quiz', { answers });
            // Assuming response contains success field
            if (response.data.success) {
                history.push('/chatlist');
            } else {
                setError('An error occurred while submitting the quiz.');
            }
        } catch (error) {
            setError('An error occurred while submitting the quiz.');
        }
    };
    
    const question = questions[activeStep];

    return (
        <div>
            <ResponsiveAppBar title="Starting quiz" />
            <Box display="flex" justifyContent="center" sx={{ mt: 10 }}>
                <Typography variant="h4" component="h1" color="primary">
                    Please complete this short quiz
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ mt: 1, mx: 8 }} color="textPrimary">
                <Typography display="flex" variant="body1" component="h2" justifyContent="center" gutterBottom>
                    Then, let TheApp create some tailored discussions for you
                </Typography>
            </Box>
            {error && (
                <Box display="flex" justifyContent="center" sx={{ mt: 2, mx: 8 }} color="error.main">
                    <Typography variant="body1">{error}</Typography>
                </Box>
            )}
            <Box component="form">
                <Card sx={{ mt: 3, mx: 3 }}>
                    <Typography variant="button">
                        {question.title}
                    </Typography>
                    <FormGroup>
                        {question.options.map((option) => (
                            <FormControlLabel
                                key={option}
                                control={
                                    <Checkbox
                                        checked={answers[question.title]?.[option] || false}
                                        onChange={() => handleCheckboxChange(question.title, option)}
                                    />
                                }
                                label={option}
                            />
                        ))}
                    </FormGroup>
                </Card>
                <MobileStepper
                    steps={questions.length}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        activeStep === questions.length - 1 ? (
                            <Button size="small" onClick={handleSubmit}>
                                Submit
                            </Button>
                        ) : (
                            <Button size="small" onClick={handleNext} disabled={activeStep === questions.length - 1}>
                                Next
                            </Button>
                        )
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            Back
                        </Button>
                    }
                />
            </Box>
        </div>
    );
}

export default Quiz;
