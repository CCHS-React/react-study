// // 첫번째 문제 
// // if else, prompt를 사용해서 
// // 입력받은 시간이 오전인지 오후인지
// // 구분하는 코드
// let time = prompt("시간을 입력하세요");

// if (time < 12) {
//     alert('오전입니다');
// } else {
//     alert('오후입니다');
// }

// // 두번째문제
// // 현재 환율을 기반으로 사용자에게 숫자를 입력받아서
// // 달러에서 원화로 환율을 변환하는 프로그램을 만들어 보세요 
// // 1달러 = 1300원
// let exchange = prompt("달러를 입력하세요");
// exchange = exchange * 1300;
// won = exchange * 1300;
// alert(won);

// // 코드를 보고 결과를 예측해보세요
// console.log(2 + 2 - 2 * 2 / 2 * 2)

// // 자료형 숫자 문자 불린 
// let A = "aaa";
// console.log(typeof(A));

// // "+" 문자열 연산, 숫자 연산
// let a = "가나다"+"라마바사";
// console.log(a);
// // a 가나다라마바사
// let num = 123+456;
// console.log(num);
// // num 123456



//3번째 문제 
// 중첩 조건문을 사용
// 중첩 조건문이란 조건문 안에 조건문이 들어가는 코드 
// 학점은 4.5 만점으로 한다
// 학점을 입력 받아서 특정 범위 안에 있는 학점의 경우에는 
// 칭호를 붙여주자 
// 학점이 1.0 ~ 2.0 = 플랑크톤
//  2.0 ~ 3.0 = 돌고래
//  3.0 ~ 4.0 = 인간
//  4.0 ~ 4.4 = 교수님
//  4.5 = 신
let score = Number(prompt('학점을 입력하세요','학점'));
// if (score == 4.5) {
//     alert("신");
// } else if (4.0 <= score && score < 4.5){
//     alert('교수님');
// } else if (3.0 <= score && score < 4.0) {
//     alert('인간');
// } else if (2.0 <= score && score < 3.0) {
//     alert('돌고래');
// } else if (1.0 <= score && score < 2.0) {
//     alert('플랑크톤');
// }

if (score === 4.5) {
    alert('신');
} else if (4.0 <= score) {
    alert('교수님');
} else if (3.0 <= score) {
    alert('인간');
} else if (2.0 <= score) {
    alert('돌고래');
} else if (1.0 <= score) {
    alert('플랑크톤');
} else {
    alert('4.5보다 크거나 1.0보다 작음');
}

// 반복문을 사용하는 이유
// 컴퓨터 반복 작업을 시키는건 간단합니다 
// 똑같은 코드를 반복하고 싶은 만큼 작성을 하면 됩니다
// 가독성을 위해서 이 과정을 짧게 축약해서 사용한 것이
// 오늘날의 반복문입니다. 

for (let i = 0; i < 10; i++) {
    console.log(`${i}번 반복`);
}