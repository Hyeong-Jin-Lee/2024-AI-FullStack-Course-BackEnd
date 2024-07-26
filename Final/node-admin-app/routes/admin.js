var express = require('express');
var router = express.Router();


/* 
- 관리자계정목록 웹페이지 요청과 응답처리 라우팅메소드
- 요청주소: http://localhost:5001/admin/list
- 요청방식: Get
- 응답결과: admin/list.ejs 뷰페이지 반환
*/
router.get('/list', function(req, res, next) {
    res.render('admin/list.ejs');
});

/* 
- 관리자계정 신규등록 웹페이지 요청과 응답처리 라우팅메소드
- 요청주소: http://localhost:5001/admin/create
- 요청방식: Get
- 응답결과: admin/create.ejs 뷰페이지 반환
*/
router.get('/create', function(req, res, next) {
    res.render('admin/create.ejs');
});

/* 
- 관리자계정 신규등록 웹페이지 요청과 응답처리 라우팅메소드
- 요청주소: http://localhost:5001/admin/create
- 요청방식: post
- 응답결과: 목록페이지 이동
*/
router.post('/create', function(req, res, next) {
    //기능구현

    const articleIdx = req.body.id; 
    const pw = req.body.pw;
    const code = req.body.code;

    res.redirect('/admin/list');
});


router.post('/modify',async(req,res)=>{
 
    const id = req.body.id;
    const pw = req.body.pw;
    const code = req.body.code;

    res.redirect('/admin/list');
 });

router.get('/delete',async(req,res)=>{
    
    //req.query.키명으로 쿼리스트링방식으로 전달된 데이터 추출
    const article = req.query.aid;

    //Step2: 데이터 삭제처리
    
    //Step3: 사용자 브라우저 게시글 목록 이동처리
    res.redirect('/admin/list');

});

router.get('/modify/:id',async(req,res)=>{

    res.render('admin/modify.ejs');
});

module.exports = router;