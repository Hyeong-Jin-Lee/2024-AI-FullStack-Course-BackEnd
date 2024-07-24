//base1 모듈을 참조해서 odd,even,test함수를 참조합니다.

//base1.js export module의 노출객체를 객체 비구조화할당방식으로 변수 odd, even, 함수test를 참조합니다.
const {odd,even,test}=require('./base1');

// const {odd,even,test}={
//      odd:odd,
//      even:even,
//      test:function(){
//      }
// }

//전달되는 숫자가 홀수인지 짝수인지 체크해서 홀짝 문자열 상수를 반환합니다.
function checkOddOrEven(num){
    //홀수
    if(num%2){
        return odd;
    }

    //짝수
    return even;
}

console.log("base2.js에서 사용하는 base1.js의 test함수 호출하기", test());

module.exports=checkOddOrEven;