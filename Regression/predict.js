const fs = require('fs').promises;

// Load the JSON file with model parameters
async function loadModel() {
    const data = await fs.readFile('./multiple_regression_model.json', 'utf-8');
    return JSON.parse(data);
}

// Predict function for multiple regression
function predict(input, model) {
    const { coefficients, intercept } = model;

    // Ensure the input length matches the coefficients length
    if (input.length !== coefficients.length) {
        throw new Error("Input length must match the number of coefficients");
    }

    // Calculate the dot product of coefficients and input, then add the intercept
    const prediction = input.reduce((sum, value, index) => sum + value * coefficients[index], intercept);
    return prediction;
}

// Example usage
async function runPrediction() {
    const model = await loadModel();
    const input = [70, 35.5, 14, 60, 300, 2]; // Replace with your input values
    const predictedCost = predict(input, model);
    console.log(`Predicted Repair Cost: ${predictedCost}`);
}

runPrediction().catch(console.error);

