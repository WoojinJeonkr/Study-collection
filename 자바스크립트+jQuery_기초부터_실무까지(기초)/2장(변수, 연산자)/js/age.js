// 함수 calc()선언과 구현
function calc() {
    // 올해 년도를 변수 currentYear에 저장
    // var currentYear = 2022;
    // 올해 년도를 사용자로부터 입력받아 변수 currentYear에 저장
    var currentYear = prompt("현재 년도를 입력하세요","YYYY");
    // 사용자로부터 입력 받은 값을 변수 birthYear에 저장
    var birthYear = prompt("태어난 년도를 입력하세요","YYYY");
    var age = 0;
    // 실제 나이를 구하기 위한 코드
    age = currentYear - birthYear + 1;
    // document: 현재 웹 브라우저의 페이지,
    // querySelector("#result"): id가 result인 웹 요소(div)
    // innerHTML: 대입한 값으로 html 문서에 대체
    document.querySelector("#result").innerHTML =
                                "당신의 나이는 "+age+"세입니다."; 
}