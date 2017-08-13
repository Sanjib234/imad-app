var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article-one | Sanjib Kumar Mallick',
    heading: 'Article One',
    date: 'Set 5,2017',
    content:`
     <p>
                    This is the content for my first article.This is the content for my first article. This is the content for my first article.
                </p>
                <p>
                   This is the content for my first article.This is the content for my first article. This is the content for my first article. 
                </p>
                <p>
                   This is the content for my first article.This is the content for my first article. This is the content for my first article. 
     </p>`
    
};

var articleTwo = {
    title: 'Article-Two | Sanjib Kumar Mallick',
    heading: 'Article Two',
    date: 'Set 6,2017',
    content:`
     <p>
                    This is the content for my first article.This is the content for my first article. This is the content for my first article.
                </p>
                <p>
                   This is the content for my first article.This is the content for my first article. This is the content for my first article. 
                </p>
        `
    
};

function createTemplate(data){
var title =data.title;
var heading =data.heading;
var date = data.date;
var content = data.content;

    var htmlTemplate =`
    <html>
        <head>
            <title>
               ${title}
            </title>
            <meta name ="veiwport" content = "width=device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet" />
                </head>
        <div class="container">
            
            <div>
                <o herf="/">Home</o>
            </div>
            <hr/>
            <h3>
                <div>
                    ${heading}
                 </div>
            </h3>
                <div>
                   ${date}
                </div>
                <div>
                    ${content}
                </div>
        </div>
        
    </html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
  res.send(createTemplate(articleOne));
});

app.get('/article-Two',function(req,res){
  res.send(createTemplate(articleTwo));
});

app.get('/article-Three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
