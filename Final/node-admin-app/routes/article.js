var express = require('express');
var router = express.Router();

router.get('/list', function(req,res){
    res.render('article/list.ejs');
})

router.get('/create', function(req, res) {
    res.render('article/create.ejs');
});

router.post('/create', function(req, res) {

    const id=req.body.id;
    const pw=req.body.pw;
    const code=req.body.code;
    res.redirect('/article/list');
});

router.post('/modify', async(req,res)=>{

    const id=req.body.id;
    const pw=req.body.pw;
    const code=req.body.code;

    res.redirect('/article/list');
 });

router.get('/delete', async(req,res)=>{
    
    //req.query.키명으로 쿼리스트링방식으로 전달된 데이터 추출
    const article = req.query.aid;

    //Step2: 데이터 삭제처리
    
    //Step3: 사용자 브라우저 게시글 목록 이동처리
    res.redirect('/article/list')

});

router.get('/modify/:id', async(req,res)=>{

    res.render('article/modify.ejs',);
});


module.exports = router;