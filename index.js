const express = require('express');
const config = require('config');
const {testRouter} = require('./routers');

const app = express();

require('./utils/init.util')(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use('/test', testRouter);

// we will require db config here. Wait for DB connection to open and them start the server after connection success
app.listen(config.get('port'), (err) => {
    console.log('server listening on port' + config.get('port'));
});