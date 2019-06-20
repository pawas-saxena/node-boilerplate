const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/staticFiles'));

app.get('/', (req , res)=>{
    res.render('index.ejs');
});

app.listen(port, ()=>{
    console.log('server listening on port' + port);
});