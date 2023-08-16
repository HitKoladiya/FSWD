const os = require('os');
function displayMemoryInfo() {
// Get the total system memory
const totalMemory = os.totalmem();
// Get the free memory
const freeMemory = os.freemem();
// Calculate the percentage of free memory
const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
// Display the information
console.log('Total Memory:', formatBytes(totalMemory));
console.log('Free Memory:', formatBytes(freeMemory));
console.log('Free Memory Percentage:', freeMemoryPercentage.toFixed(2) + '%');
}
// Helper function to format bytes to human-readable format
function formatBytes(bytes) {
const units = ['B', 'KB', 'MB', 'GB', 'TB'];
let i = 0;
while (bytes >= 1024 && i < units.length - 1) {
bytes /= 1024;
i++;
}
return bytes.toFixed(2) + ' ' + units[i];
}
// Call the function to display memory information
displayMemoryInfo();
