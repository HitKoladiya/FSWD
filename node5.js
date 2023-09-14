// const envVariables = process.env;
// for (const key in envVariables) {
//   if (envVariables.hasOwnProperty(key)) {
//     console.log(`${key}: ${envVariables[key]}`);
//   }
// }

// function displayEnvVariableValue(variableName) {
//   const variableValue = process.env[variableName];

//   if (variableValue !== undefined) {
//     console.log(`Value of ${variableName}: ${variableValue}`);
//   } else {
//     console.log(`Environment variable ${variableName} is not defined.`);
//   }
// }

// // Usage example
// const variableName = "PATH"; // Replace with the desired variable name
// displayEnvVariableValue(variableName);

require('dotenv').config();

// Access environment variables
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

console.log('Database Configuration:', dbConfig);
