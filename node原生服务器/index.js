let http = require('http');
let qs =require('querystring');
let server = http.createServer(function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8')
    let params = req.url.split('?')[1];
    console.log(params);
    params=qs.parse(params)
    console.log(params);
    res.end(params.name+'----'+params.age);
})
server.listen(4000,function(err){
    if(!err){
        console.log('ok');
    }else{
        console.log('error');
    }
}) 