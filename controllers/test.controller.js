function postTest(req, res){
    res.json(Object.assign({'foo':'bar'}, req.body));
}

module.exports = {
    postTest
}