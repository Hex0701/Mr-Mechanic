import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import json


# Import the dataset
df = pd.read_csv('./new_data.csv')

# # Print the first few rows of the dataset
# print(df.head())

# Convert fault_type to integers
df['fault_type'] = df['fault_type'].astype('category')
df['fault_type'] = df['fault_type'].cat.codes

# Define features (X) and target (y)
X = df.drop(['repair_cost', 'fault_type'], axis=1)  # Features
y = df['repair_cost']  # Target variable

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.8, random_state=0)

# Train a linear regression model
lr = LinearRegression()
lr.fit(X_train, y_train)

# Predict on training data
y_pred_train = lr.predict(X_train)

# Calculate R^2 score on training data
train_r2 = r2_score(y_train, y_pred_train)
print(f"Training R^2 Score: {train_r2}")

# Predict on testing data
y_pred_test = lr.predict(X_test)

# Calculate R^2 score on testing data
test_r2 = r2_score(y_test, y_pred_test)
print(f"Testing R^2 Score: {test_r2}")

# Predict with a single input
# The input must be a 2D array
single_input = [[70, 35.5, 14, 60, 300, 2]]
test_prediction = lr.predict(single_input)
print(f"Predicted Repair Cost: {test_prediction[0]}")


# Extract coefficients and intercept
model_params = {
    "coefficients": lr.coef_.tolist(),  # List of coefficients
    "intercept": lr.intercept_,        # Intercept
    "feature_names": X.columns.tolist()  # Optional: include feature names for reference
}

# Save the parameters to a JSON file
with open("multiple_regression_model.json", "w") as json_file:
    json.dump(model_params, json_file)

print("Multiple regression model saved as JSON.")
