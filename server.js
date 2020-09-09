const http = require('http');
// requireคือการอ้างอิง
const hostName = "127.0.0.1";
//ในhost name นั่นคือ ip มาตรฐาน
const port = 8000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    res.end('hello my server');

    //setheader เป็นการตอบกลับว่าจะให้คอบเป็นอะไร กรณรีนี้ให้เป็นข้อความ
    //res.statuscode คือ รหัสตอบกลับ (ต้องมีรหัสในการตอบกลับเป็นรหัสเฉพาะ) รหัสปกติคือ 200

}) ;



server.listen(port,hostName , ()=>{
    console.log('server running on port' +  hostName + ':' + port);
});
//สั่งให้มันทำงานบอก port hostname และการตอบกลับ





