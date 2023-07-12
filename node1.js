const http = require("http");
const httpserver = http.createServer(function(req,res){
    if(req.method == 'GET')
    {
        console.log("This is get request");
        res.end("This is get request");
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