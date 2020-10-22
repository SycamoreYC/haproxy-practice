var http = require('http');     

const port = process.env.PORT;
//http模块提供了createServer函数,这个函数会返回一个对象，我们将返回的对象赋值给server。
var server = http.createServer(function(req, res){ //req：接收到的数据。 res：响应数据
        
    //设置响应的头部。 content-Type 响应数据内容的类型
    res.setHeader("Content-Type","text/html; charset=utf-8");  
    res.writeHead(200,'ok');		//HTTP状态值
    res.write(`Hello Node!! port: ${port}`);		//响应内容
    res.end();	
	
});
 
server.listen(port);
console.log(`Server is running on: htttp://localhost:${port}`);
