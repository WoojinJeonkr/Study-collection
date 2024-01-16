# Node-React
따라하며 배우는 노드, 리액트 시리즈 학습 내용

---

## 학습 강의
[인프런](https://www.inflearn.com/) - [따라하며 배우는 노드, 리액트 시리즈](https://www.inflearn.com/roadmaps/331)

---

## 학습 내용

### Node.js
확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼   
작성 언어로 자바스크립트 활용   
논블로킹 I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가짐   

### postman
개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생산성을 높여주는 플랫폼   
postman을 통해 페이지 전송이 제대로 이루어지는지 테스트해볼 수 있다

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

### React.js
자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용   
싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용 가능

### concurrently   
concurrently package를 다운받아 Node.js 서버와 React 서버를 동시에 실행 가능   
작성 스크립트: "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
실행 방법: Terminal에서 npm run dev

---

## Error List

1. heroku 사용 실패 [2022-07-07]   
내용: heroku에 키를 저장한 뒤 heroku로 불러오는 방법   
결과: heroku 로그인 진행 뒤 key 저장 방법을 알 수 없어 실패
1-1. heroku 사용 해결 [2022-07-08]
내용: key 저장 방법
방법: heroku 접속 후 만들어진 앱 클릭 > Settings > Config vars에 key 등록 

2. ERROR: CANNOT PULL WITH REBASE: YOUR INDEX CONTAINS UNCOMMITTED CHANGES. [2022-07-07]   
내용: git push 시 발행한 에러   
원인: 마지막 커밋 이후에 커밋하지 않은 작업물이 남아 있어 REBASE 에러 발생   
해결: git pull --rebase --autostash 입력 후 git push 절차 진행

3. MongoParseError: option useCreateIndex, useFindandModify is not supported [2022-07-08]   
내용: mongoose 6버전 이상에선 더이상 useNewUrlParser, useUnifiedTopology, useFindAndModify, useCreateIndex 지원하지 않는데 사용해서 발생한 에러    
해결: 해당 부분 삭제 후 실행

4. MongoDB 연결 오류 [2022-07-08]   
원인: 코드 오류   
해결: userSchema.this.password -> this.password로 수정

5. 'Switch' is not exported from 'react-router-dom' [2022-07-09, 2022-07-10]   
원인: react-router-dom 버전 5의 코드로 작성하여 발생하는 오류   
해결: react-router-dom이 버전 5로 설치 변경
[2022-07-11] react-router-dom 버전 6 재설치

6. Auth 적용 부분 적용 안됨 [2022-07-11]
내용: 로그인 후 로그인 페이지, 회원가입 페이지로 이동되지 못하도록 작성했지만 현재 이동되는 상태