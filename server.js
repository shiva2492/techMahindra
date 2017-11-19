var express = require('express');
var app     = express();
var fs = require('fs');

app.use('/', express.static(__dirname + '/'))

app.get('/dashboard_data',function(req,res){
  
  fs.readFile('./src/dashboard-view.json','utf-8',function(err,data){
  	if(err)
  		return console.log(err);
  	console.log(JSON.parse(data).length)
  	
  	var data = JSON.parse(data);
  	res.status(200).send(data);
  })

});

app.get('/overallRag_data',function(req,res){
  
  fs.readFile('./src/overallRag_Drilldown.json','utf-8',function(err,data){
    if(err)
      return console.log(err);
    console.log(JSON.parse(data))
    
    var data = JSON.parse(data);
    res.status(200).send(data);
  })

});



app.get('*',function(req,res){
  res.sendfile('src/index.html');
});



app.listen(9000, function() {
    console.log("Listening on 9000");
});