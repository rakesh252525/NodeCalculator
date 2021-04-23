const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    var n1 =Number( req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1+n2;

    
   
   console.log(req.body);
    res.send("The sum is "+result);

})

app.get("/bmi",function(req,res){

    res.sendFile(__dirname+"/bmiCalculator.html");

    console.log("Bmi req...");

});

app.post("/bmi",function(req,res){

    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);

    var bmi = w/(h*h);

    res.send("Your BMI is "+bmi);




});


app.listen(3000,function(){
console.log("Server is running ...");

})