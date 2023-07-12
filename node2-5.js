const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {

    function compareFile(file1,file2){
      for(let i=0;i<file1.length;i++){
        if(file1[i]!=file2[i]){
          return i;
        }
      }
      return 0;
    }

    let cmp1 = fs.readFileSync("./asset/cmp1.txt","utf-8");
    let cmp2 = fs.readFileSync("./asset/cmp2.txt","utf-8");
    console.log(cmp1);
    console.log(cmp2);
    if(cmp1.length>cmp2.length){
      res.writeHead(200, { "Content-Type": "text/html" });
      let index = compareFile(cmp1,cmp2);
      if(index==0){
        res.end("cmp1 is equal to cmp2");
      }
      else{
        res.end(`cmp2 is greater and different at index ${index}`);
      }
    }
    else{
      res.writeHead(200, { "Content-Type": "text/html" });
      let index = compareFile(cmp1,cmp2);
      if(index==0){
        res.end("cmp1 is equal to cmp2");
      }
      else{
        res.end(`cmp2 is greater and different at index ${index}`);
      }
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("This is not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
