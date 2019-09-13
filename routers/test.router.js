// These are the controllers for a particular route.
// This file will contain the actions for a particular controller
const express = require('express');
const router =  express.Router();

router.get('/', (req, res)=>{
    res.send('from router');
});



module.exports = router;