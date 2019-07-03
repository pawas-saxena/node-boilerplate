const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const testController = require('./controllers/test.controller');
const app = express();
const port = config.get('port');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/staticFiles'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/postTest', (req, res) => {
    testController.postTest(req, res);
});

app.get('/test', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, (err) => {
    console.log('server listening on port' + port);
});