var express = require('express');
var app = express();
// require คือการอ้างอิง libary


//install ejs
//<cmd>npm i express-generator (เพื่อติดตั้งexpress ejs)
//<cmd>express --view=ejs app (ejsง่ายกว่าplug) (อาจต้องเอาerrorไปsearchหาเพื่อแก้ไข หาexpressไม่เจอ)




app.get('/',function(req,res,next){
    res.send('hello by aod');
})
app.get('/hi',function(req,res,next){
    res.send('hello by tan');
})
app.get('/hello',function(req,res,next){
    res.send('hello by eiei');
})

app.listen(3000)










