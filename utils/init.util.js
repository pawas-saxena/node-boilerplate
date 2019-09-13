const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');


const init = (app)=>{
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.json());
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname , '../' , '/staticFiles')));
};


module.exports = init;