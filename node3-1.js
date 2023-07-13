//Write a program that uses the os module to display the current user's username, home directory, and operating system platform. 
const os = require("os");
console.log("Username: "+os.userInfo().username);
console.log("Home Directory: "+os.userInfo().homedir);
console.log("Operating System Platform: "+os.platform());


//Create a function that utilizes the os module to display the total system memory, free memory, and the percentage of free memory available. 
function memory(){
    console.log("Total System Memory: "+os.totalmem() +" bytes");
    console.log("Free Memory: "+os.freemem() +" bytes");
    console.log("Percentage of Free Memory Available: "+(os.freemem()/os.totalmem())*100 +"%");
    //in GB
    console.log("Total System Memory: "+(os.freemem())/1024/1024/1024 +" GB");
}
memory();

