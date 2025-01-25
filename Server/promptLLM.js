const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI("AIzaSyBXKu7UeamDuZ1NkHbkZF5C4ZQ8AePNKns");

async function generateAIResponse(prompt) {
    try {
        const model = await genAI.getGenerativeModel({ model: "tunedModels/convertedpromptmodel-stjjxfi97630" });
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating AI response:", error);
        throw error;
    }
}

module.exports = generateAIResponse;
