var faker = require('faker');

var express = require("express");
var app = express();

var someHTML="";
for(var i=0;i<100;i++)
{
    var randImage = faker.image.image();
    someHTML += "<img src='" + randImage + "' width='350px' height='350px'></img> ";
}

app.get("/", function(request, response){
    response.send(someHTML);
})


app.listen(3002, function(){
    console.log("Server has started!");
})