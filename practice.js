let num = 10; // 전역 변수 num을 선언함. 모든 구간 사용 가능

function globalNum() {
	let kum = 20; // 같은 이름의 지역 변수 num을 선언함. 함수 내에서만 선언 가능
	console.log("함수 내부에서 지역 변수 num의 값은 " + kum + "입니다.<br>");
	console.log("함수 내부에서 전역 변수 num의 값은 " + num + "입니다.<br>");
}
console.log("함수 내부에서 전역 변수 num의 값은 " + num + "입니다.<br>");
// console.log("함수 내부에서 전역 변수 num의 값은 " + kum + "입니다.<br>"); // kum은 함수 내에서만 사용되는 지역변수이기에 undefined가 찍힌다.

globalNum(); // 함수 globalNum()을 호출함.
