var express = require('express');
var router = express.Router();

router.get('/list',function(req,res,next){
    res.render('member/list.ejs');
})

router.post('/modify',async(req,res)=>{
    // Step1: 사용자 수정데이터를 추출하고 수정할 데이터 소스를 생성
     // 수정할 대상이 되는 게시글 고유번호
     const articleIdx = req.body.article_id; //hidden태그의 name속성값
 
     // 실제 수정할데이터항목별 값 세팅하기
     const article={
         title:req.body.title,
         contents:req.body.contents,
         display:req.body.display,
         modify_id:1,
         modify_date: Date.now()
     }
 
    // Step2: DB게시글 테이블에 특정게시글 번호를 기준으로 게시글 정보를 수정처리한다
    // Update article Set title='수정한 제목', contents='수정한 내용', display='게시여부값', modify_id, modify_date='2024-07-25 18:08:12' WHERE article_id=1;
    
 
    // 수정이 완료되면 DB서버에서 수정처리건수가 반환된다.
 
    // Step3: 게시글 목록페이지로 이동처리
    res.redirect('/member/list');
 });

 router.get('/delete',async(req,res)=>{
    
    //req.query.키명으로 쿼리스트링방식으로 전달된 데이터 추출
    const article = req.query.aid;

    //Step2: 데이터 삭제처리
    
    //Step3: 사용자 브라우저 게시글 목록 이동처리
    res.redirect('/member/list')

});

router.get('/modify/:idx',async(req,res)=>{

    // Step1: url주소에서 게시글 고유번호를 추출합니다.
    const articleIdx = req.params.idx;

    // Step2: DB게시글 페이지에서 해당 게시글 고유번호에 해당하는 단일게시글 정보를 조회해옵니다.
    // 조회해 왔다고 가정
    const article = {
            article_id: 1,
            title:"게시글 제목1입니다.",
            contents:"게시글1 내용입니다.",
            display:1,
            view_cnt:10,
            ip_address:"111.111.111.111",
            regist_id:1,
            regist_date:Date.now()
    }
    // Step3: DB에서 가져온 단일게시글 정보를 modify.ejs 뷰파일에 전달
    res.render('member/modify.ejs',{article:article});
});


module.exports = router;