var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-One': {
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
            
        },
        
    'article-Two': {
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
            
        },
        
    'article-Three': {
            title: 'Article-Three | Sanjib Kumar Mallick',
            heading: 'Article Three',
            date: 'Set 7,2017',
            content:`
             <p>
                            This is the content for my first article.This is the content for my first article. This is the content for my first article.
                        </p>
                        
                `
            
        }
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

app.get('/:articleName',function(req,res){
    //artcileName=article-one
    //articles[articleName] = {}content object for article one
    var articleName = req.params.articleName
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
