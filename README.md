# Node-React
따라하며 배우는 노드, 리액트 시리즈 학습 내용

## 학습 강의
[인프런](https://www.inflearn.com/) - [따라하며 배우는 노드, 리액트 시리즈](https://www.inflearn.com/roadmaps/331)

## 학습 내용
### postman
개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생산성을 높여주는 플랫폼   
postman을 통해 페이지 전송이 제대로 이루어지는지 테스트해볼 수 있다
![postman](https://github.com/WoojinJeonkr/Node-React/blob/main/image/postman_test.png?raw=true){: width="400" height="300"}

### nodemon
평소 페이지 수정 시 서버 실행 > 종료 > 페이지 수정 > 서버 실행의 절차를 거치지만   
nodemon을 사용하면 서버 실행 > 페이지 수정 > 페이지 새로고침의 과정을 통해 쉽게 페이지 수정 가능하다
![nodemon](https://github.com/WoojinJeonkr/Node-React/blob/main/image/nodemon_connect.gif?raw=true)

### heroku
Java, Node.js, Python등 여러 언어를 지원하는 클라우드 Paas

### Bcrypt
설치 방법: npm install bcrypt --save   
비밀번호를 암호화할 때 사용

### body-parser
설치 방법: npm install body-parser --save
클라이언트 POST request data의 body로부터 파라미터 추출 시 사용

### cookie-parser
설치 방법: npm install cookie-parser --save
요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어

## Error List

1. heroku 사용 실패 [2022-07-07]   
내용: heroku에 키를 저장한 뒤 heroku로 불러오는 방법   
결과: heroku 로그인 진행 뒤 key 저장 방법을 알 수 없어 실패   

2. ERROR: CANNOT PULL WITH REBASE: YOUR INDEX CONTAINS UNCOMMITTED CHANGES. [2022-07-07]   
내용: git push 시 발행한 에러   
원인: 마지막 커밋 이후에 커밋하지 않은 작업물이 남아 있어 REBASE 에러 발생   
해결: git pull --rebase --autostash 입력 후 git push 절차 진행
