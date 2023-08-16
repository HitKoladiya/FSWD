// const { URL } = require("url"); // Use destructuring to directly access the URL class
// function resolveUrl(baseUrl, relativePath) {
//   try {
//     // Create a new URL object using the baseUrl and relativePath
//     const absoluteUrl = new URL(relativePath, baseUrl);
//     return absoluteUrl.href;
//   } catch (error) {
//     // Handle invalid URLs or other errors here
//     console.error("Error resolving URL:", error.message);
//     return null;
//   }
// }
// // The following code will only execute if this script is run directly (not imported as a module)
// if (require.main === module) {
//   const baseURL = "https://www.google.com";
//   const relativePath = "/about";
//   const absoluteURL = resolveUrl(baseURL, relativePath);
//   if (absoluteURL) {
//     console.log("Resolved URL:", absoluteURL);
//   } else {
//     console.log("Failed to resolve URL.");
//   }
// }

// const url = require("url");
// const querystring = require("querystring");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a URL with a query string: ", (userURL) => {
//   const parsedURL = url.parse(userURL);
//   const queryParameters = querystring.parse(parsedURL.query);
//   console.log("Query Parameters:");
//   for (let key in queryParameters) {
//     console.log(`${key}: ${queryParameters[key]}`);
//   }
//   rl.close();
// });

// const path = require("path");
// function areSameFile(filePath1, filePath2) {
//   file1 = path.resolve(filePath1);
//   file2 = path.resolve(filePath2);
//   return file1 === file2;
// }
// if (require.main === module) {
//   filePath1 = "./file1";
//   filePath2 = "./file1";
//   isSameFile = areSameFile(filePath1, filePath2);
//   console.log(isSameFile);
//   if (isSameFile) {
//     console.log("Same File");
//   } else {
//     console.log("Not a Same File");
//   }
// }

// const path = require("path");
// function extractFileExtension(filePath) {
//   const extension = path.extname(filePath);
//   return extension;
// }
// // Example usage
// const filePath = "practice/abc.cpp";
// const fileExtension = extractFileExtension(filePath);
// console.log(`The file extension is: ${fileExtension}`);

// const path = require("path");
// function extractDirectoryAndBaseName(filePath) {
//   const directoryName = path.dirname(filePath);
//   const baseName = path.basename(filePath);
//   return { directoryName, baseName };
// }
// // Example usage
// const filePath = "/Users/mac/Desktop/JavaSrcript/practice/abc.cpp";
// const { directoryName, baseName } = extractDirectoryAndBaseName(filePath);
// console.log(`Directory Name: ${directoryName}`);
// console.log(`Base Name: ${baseName}`);

const fs = require("fs");
const readline = require("readline");
const t7 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function checkFileExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Error: The file "${filePath}" does not exist.`);
    } else {
      console.log(`Success: The file "${filePath}" exists.`);
    }
    t7.close();
  });
}
// Example usage
t7.question("Enter the file path: ", (filePath) => {
  checkFileExists(filePath);
});
