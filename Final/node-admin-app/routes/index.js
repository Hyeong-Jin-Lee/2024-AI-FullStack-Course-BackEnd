var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕' });
});

/*
- 관리자 웹사이트 로그인 웹페이지 요청과 응답처리 라우팅메소드
- 요청주소: http://localhost:5001/login
- 요청방식: Get
- 응답결과 : login.ejs 뷰페이지 반환
*/
router.get('/login',function(req,res,next){
  res.render('login.ejs',{layout:false});
})

/*
- 관리자 웹사이트 정보처리 요청과 응답 라우팅메소드
- 요청주소: http://localhost:5001/login
- 요청방식: Post
- 응답결과 : login.ejs 뷰페이지 반환
*/
router.post('/login',function(req,res,next){
  const userid=req.body.userid;
  const password=req.body.password;

  //id/password 체크 후 결과확인
  const result = true; 

  if(result){
    
    //정상 로그인시
    res.redirect('/main');
  }
  else{
    
    //아이디 또는 암호가 틀리면 다시 로그인페이지 반환
    res.render('login.ejs',{resultMsg:'로그인 실패'});
  }

})

// 요청주소: http://localhost:5001/main
router.get('/main',function(req,res,next){
  res.render('main.ejs');
})

module.exports = router;
