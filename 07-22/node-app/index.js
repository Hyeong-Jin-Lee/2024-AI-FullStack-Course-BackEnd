// 프로젝트에 설치된 노드패키지를 참조합니다.
// node.js backend에서는 require예약어를 이용해 설치된 패키지를 참조
const moment=require('moment');

//환경설정파일에서 환경변수를 가져오기 위해 donenv패키지를 참조합니다.
const env = require('dotenv');

//프로젝트 루트에 있는 .env파일에 환경변수정보를 CPU프로세스에서 접근가능하게 구성해준다. 
env.config()

// console 객체는 node framework 자체에서 제공하는 내장객체
// 헷갈 ㄴㄴ. console 객체는 웹브라우저 개발자도구 console의 로그와 다름.

console.log("Hello World");

var toDate=Date();
var toDate2=Date.now();
// 순수 자바스크립트 날짜데이터는 기본 숫자형으로 표시
console.log("현재 일시 출력. - 순수 자바스크립트",toDate);


console.log("현재 일시 출력. - 순수 자바스크립트",toDate2);


// moment 패키지를 통해 숫자 타입 날짜 데이터 포맷을 변경
var formatedDate=moment(toDate2).format('YYYY-MM-DD HH:mm:ss');

// 대부분의 자바스크립트 오류는 오탈자
// 초기 자바스크립트 언어개발시 문제가 있다면 오탈자/대소문자 문제
// 자바스크립트는 대소문자 가림

console.log("formatedDate: ",formatedDate);


// 환경변수중에 DB주소와 사용자 정보를 조회
console.log("DB HOST IP:",process.env.DB_HOST_IP);
console.log("DB HOST IP:",process.env.DB_USER_ID);

