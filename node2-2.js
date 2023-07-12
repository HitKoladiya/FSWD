const http = require("http");
const fs = require("fs");
const httpserver = http.createServer(function(req,res){
    if(req.method == 'GET')
    {
        try{

            res.writeHead(200,{'Content-Type': 'text/html'});
            console.log("This is get request");
            res.end("This is get request");
        }catch(e){
            res.writeHead(500,{'Content-Type': 'text/html'});
            res.end("err:",e);
        }
    }
    else if(req.method == 'POST')
    {
        try{

            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end("This is post request");
        }catch(e){
            res.writeHead(500,{'Content-Type': 'text/html'});
            res.end("err:",e);
        }    
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end("This is not found");
    }
}
);

httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
}
)