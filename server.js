var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool= require('pg').Pool;
var config={
    user:'sumitk121',
    database:'sumitk121',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));


var articles={       
    'article-one':{
    title: 'Article one|Sumit kumar',
    heading:'Article one',
    date:'23 oct,2016',
    content:
     
    <p>  My name is Sumit kumar and i study at NAtioal Institute of Technology Jalandhar.</p>
     
    <p>
    I love krishna and his technology and i everyday chant his holy name.
    </p>
    <p>
    I m a devotee of krishna and i love him alot.Hare krishna hare krishna krishna krishna hare hare hare raam hare raam raam raam hare hare.
    </p>
       },
       'article-two':{title: 'Article two|Sumit kumar',
    heading:'Article two',
    date:'25 oct,2016',
    content:
     
    <p>  My name is Sumit kumar and i study at NAtioal Institute of Technology Jalandhar.</p>
     
    <p>
    I love krishna and his technology and i everyday chant his holy name.
    </p>
    <p>
    I m a devotee of krishna and i love him alot.Hare krishna hare krishna krishna krishna hare hare hare raam hare raam raam raam hare hare.
    </p>
       },
       'article-three':{title: 'Article three|Sumit kumar',
    heading:'Article three',
    date:'27 oct,2016',
    content:
     
    <p>  My name is Sumit kumar and i study at NAtioal Institute of Technology Jalandhar.</p>
     
    <p>
    I love krishna and his technology and i everyday chant his holy name.
    </p>
    <p>
    I m a devotee of krishna and i love him alot.Hare krishna hare krishna krishna krishna hare hare hare raam hare raam raam raam hare hare.
    </p>
       },},
       function create Template(data){
           var title= data.title;
           var date=data.date;
           var heading=data.heading;
           var content=data.content;
                  }
                  var htmlTemplate=
                  <html>
                  <head>
                  <title>
                  &{title}
                  </title>
                  <meta name="viewport" content="width=device-width.initial-scale=1"/>
                  <link href="/ui/style.css" rel="stylesheet"/>
                  </head>
                  <body>
                  <div class="container">
                  <div>
                  <a href="/">HOME</a>
                  </div>
                  <hr/>
                  <h3>
                  ${heading}
                  </h3>
                  <div>
                  ${date}
                  </div>
                  <div>
                  ${content}
                  </div>
                  </body>
                  </html>
    app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/test-db',function(req,res){
    //make a select request
    //return a responce with the results
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name/',function(req,res){// /submit-name?name-xxxx
   //get the name from the request
   var name= req.query.name;
   names.push(name);
   //JSON-java script object notation
res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
