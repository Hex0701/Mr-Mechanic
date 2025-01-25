const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateAIResponse = require('./promptLLM'); // Import the function

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.post('/generate', async (req, res) => {
    const { prompt } = req.body; // Extract the prompt from the request body
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const aiResponse = await generateAIResponse(prompt); // Call the AI function
        console.log(aiResponse);
        res.json({ response: aiResponse }); // Send the response back to the client
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate AI response' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
