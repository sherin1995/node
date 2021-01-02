let http = require('http')
let server = http.createServer(function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h1>水水水水水水水水水水水水水水水水</h1>');
})
server.listen(4000,function(err){
    if(!err){
        console.log('ok');
    }else{
        console.log('error');
    }
})