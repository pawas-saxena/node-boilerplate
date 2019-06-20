const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();
const port = config.get('port');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/staticFiles'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/test', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, (err) => {
    console.log('server listening on port' + port);
});