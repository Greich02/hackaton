import React, { useState } from 'react';
import {Box, Button, Card, CardContent, Typography, MobileStepper } from '@mui/material';
import{KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material'

const questions = [
  { question: 'Quelle est votre couleur préférée?', options: ['Rouge', 'Bleu', 'Vert', 'Jaune'] },
  { question: 'Quel est votre animal préféré?', options: ['Chat', 'Chien', 'Oiseau', 'Poisson'] },
  { question: 'Quel est votre sport préféré?', options: ['Football', 'Basketball', 'Tennis', 'Natation'] },
];

function Intro() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[activeStep] = answer;
    setAnswers(newAnswers);
  };

  const handleFinish = () => {
    alert('Réponses:', answers);
  };

  return (
    <Box container sx={{ marginTop : 5}}>

      {activeStep === questions.length ? (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Thanks for completing the quiz. Submit and wait a minute while we generate your personas...
          </Typography>
          <Button variant="contained" color="primary" onClick={handleFinish}>
            Submit
          </Button>
        </Box>
      ) : (
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {questions[activeStep].question}
            </Typography>
            {questions[activeStep].options.map((option, index) => (
              <Button
                key={index}
                variant={answers[activeStep] === option ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleAnswer(option)}
                sx={{ m: 1 }}
              >
                {option}
              </Button>
            ))}





            {/*Mobile stepper*/}
            <Box item sx={{paddingTop : 3, justifyContent : "center"}}>
            <MobileStepper
                variant="progress"
                steps={questions.length}
                position="static"
                activeStep={activeStep}
                sx={{ width: 550 }}
                nextButton={
                <Button size="small" onClick={activeStep === questions.length - 1 ? handleFinish : handleNext}
                disabled={answers[activeStep] === null}>
                {activeStep === questions.length - 1 ? 'Finsh' : 'Next'}
                    <KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button size="small" disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}>
                    <KeyboardArrowLeft />
                Back
                </Button>
            }
            />
        </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Intro;
