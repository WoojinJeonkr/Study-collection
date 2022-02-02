// heading이라는 변수 선언, h1태그를 저장
var heading = document.querySelector("#heading");
// h1태그를 클릭 시 글자색 red로 변경
heading.onclick = function() {
    heading.style.color = "red";
}