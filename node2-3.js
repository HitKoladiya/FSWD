const http = require("http");
const fs = require('fs');
const httpserver = http.createServer(function(req,res){
    if(req.method == 'GET')
    {
        fs.readFile('./asset/studentData.txt',async function(err, data) {
            //convert data from binary to string
            data = data.toString();
            // console.log(data);
            //parse data by \n
            data = data.split("\n");
            let extractData=[];
            for(var i=0;i<data.length;i++)
            {
                x=data[i].split(",");
                if(x[0].includes("Hi") && Number(x[1])>7){
                    extractData.push(data[i]);
                }
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(extractData));
            return res.end();
        }); 
    }
    if(req.method == 'POST')
    {
        console.log("This is post request");
        res.end("This is post request");
    }  
});
httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
})