var express = require('express');
var router = express.Router();

router.get('/list',function(req,res,next){
    res.render('message/list.ejs');
})

module.exports = router;