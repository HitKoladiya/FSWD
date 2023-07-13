const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("welcome to server");
  }

  if (req.method === "POST") {
  
    // dir='./tmp'
    // if (!fs.existsSync(dir)){
    //   fs.mkdirSync(dir);
    // }
    //   fs.writeFile("./tmp/employeeData.txt","test1", function (err) {
    //     if (err) throw err;
    //     console.log('File is created successfully.');
    //   });

    // //list all files in directory
    // fs.readdir("../FSWD", (err, files) => {
    //   files.forEach(file => {
    //     console.log(file);
    //   });
    // });

    //list all directory
    fs.readdir("../FSWD", (err, files) => {
      //display only folder
      files.forEach(file => {
        if(fs.lstatSync("../FSWD/"+file).isDirectory()){
          console.log(file);
        }
      }
      );
    });


      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Employee data saved successfully.");
    }
   else {
    res.statusCode = 404;
    res.end("Endpoint not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});