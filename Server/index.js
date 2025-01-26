const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateAIResponse = require('./promptLLM'); // Import the function
const runPrediction = require("./predict.js")

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
  });

app.post('/generate', async (req, res) => {
    const { prompt } = req.body; // Extract the prompt from the request body
    // Uncommented prompt validation to ensure prompt is provided
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const aiResponse = await generateAIResponse(prompt); // Call the AI function
        console.log(aiResponse);

        // Convert aiResponse string to array of numbers
        const responseArray = aiResponse.split(',').map(Number);
        console.log(responseArray);

        try {
            // Assuming runPrediction is an async function that returns a prediction
            const resML = await runPrediction(responseArray);
            console.log(resML); // Log the machine learning response

            // Send the prediction response to the client
            res.json({ response: aiResponse, prediction: resML });
        } catch (predictionError) {
            console.error("Prediction error:", predictionError);
            res.status(500).json({ error: 'Failed to run prediction' });
        }
        
    } catch (error) {
        console.error("AI response generation error:", error);
        res.status(500).json({ error: 'Failed to generate AI response' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// jsdjakdkx