// exports.함수명은 해당 모듈파일에서 여러개의 재사용 가능한 함ㅅ의 기능이 하루
//외부에서 사용할 수 있게 노출한다


//사용자 요청 URL을 분석해서
//파라메터방식으로 값이 전달된 경우 특정 파라메터값을 추출해서
//비지니스 로직을 처리 적용한다.
exports.checkParams=(req,res,next)=>{
        if(req.params.id==undefined){
            console.log("id 파라메터가 존재 않습니다.");
            //res.redirect('/');
        }
        else{
            console.log("id 파라메터 값",req.params.id);
        }
        next();
    }



//사용자 요청 URL을 분석해서
//쿼리스트링방식으로 값이 전달된 경우 특정 키값을 추출해서
//비지니스 로직을 처리 적용한다.
exports.checkQuery=(req,res,next)=>{
    if(req.query.category=undefined){
        console.log("category키값이 전달되지 않았습니다.")
    }
    next();
}