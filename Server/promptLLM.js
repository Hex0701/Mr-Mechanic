const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI("AIzaSyBXKu7UeamDuZ1NkHbkZF5C4ZQ8AePNKns");

async function generateAIResponse(prompt) {
    try {
        const model = await genAI.getGenerativeModel({ model: "tunedModels/cardiagnosticsmodel-qfnbjv625usi" });
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating AI response:", error);
        throw error;
    }
}

async function generateReport(prompt, price) {
    try {
        const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt + "price to fix: " + price + "generate a very short report of what could have gone wrong with the car");
        return result.response.text();
    } catch (error) {
        console.error("Error generating report:", error);
        throw error;
    }
}

module.exports = { generateAIResponse, generateReport }; // Correct export
