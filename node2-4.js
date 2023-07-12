const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("welcome to server");
  }

  if (req.method === "POST") {
    let body = [];

    req.on("data", (chunk) => {
        body.push(chunk);
    }).on("end", () => {
      const employeeData = Buffer.concat(body).toString();
      console.log(employeeData);

      let employeejson = fs.readFileSync("./asset/employeeData.json","utf-8");
      let employee = JSON.parse(employeejson);

      employee.push(JSON.parse(employeeData));

      fs.writeFileSync("./asset/employeeData.json",JSON.stringify(employee));

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Employee data saved successfully.");
    });
  } else {
    res.statusCode = 404;
    res.end("Endpoint not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});