// 아이디 유효성 검사
export const validateUsername = (username: string) => {
  return username.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{3,21}$/);
};

// 비밀번호 유효성 검사
export const validatePassword = (password: string) => {
  return password.toLowerCase().match(/^[a-zA-Z0-9]{8,12}$/);
};

// 비밀번호 일치 여부 검사
export const matchPassword = (password: string, checkPassword: string) => {
  if (password === checkPassword) {
    return true;
  }
  return false;
};

// 닉네임 유효성 검사
export const validateNickname = (nickname: string) => {
  return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,9}$/);
};

// 이메일 유효성 검사
export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    );
};

// Username 오류 메시지 표시
export const displayUsernameMsg = (username: string) => {
  if (username.replace(/(\s*)/g, "").length < 1) {
    return "아이디를 입력해주세요.";
  }
  if (!validateUsername(username)) {
    return "4글자 이상 20글자 미만으로 입력해주세요.";
  }
  return "아이디 형식에 부합합니다.";
};

// Password 오류 메시지 표시
export const displayPasswordMsg = (password: string) => {
  if (password.replace(/(\s*)/g, "").length < 1) {
    return "비밀번호를 입력해주세요.";
  }
  if (validatePassword(password)) {
    return "사용가능한 비밀번호입니다.";
  }
  return "8글자 이상 13글자 미만으로 입력해주세요.";
};

// Password 확인 오류 메시지 표시
export const displayChkPasswordMsg = (
  password: string,
  checkPassword: string,
) => {
  if (checkPassword.replace(/(\s*)/g, "").length < 1) {
    return "재확인할 비밀번호를 입력해주세요.";
  }
  if (matchPassword(password, checkPassword)) {
    return "비밀번호가 확인되었습니다.";
  }
  return "기존에 입력하신 비밀번호와 일치하지 않습니다.";
};

// Nickname 오류 메시지 표시
export const displayNicknameMsg = (nickname: string) => {
  if (nickname.replace(/(\s*)/g, "").length < 1) {
    return "닉네임을 입력해주세요.";
  }
  if (!validateNickname(nickname)) {
    return "2글자 이상 8글자 미만으로 입력해주세요.";
  }
  return "닉네임 형식에 부합합니다.";
};

// Email 오류 메시지 표시
export const displayEmailMsg = (email: string) => {
  if (email.replace(/(\s*)/g, "").length < 1) {
    return "이메일을 입력해주세요.";
  }
  if (!validateEmail(email)) {
    return "입력하신 이메일이 형식에 어긋납니다.";
  }
  return "이메일 형식에 부합합니다.";
};

// 로그아웃 버튼
export const logoutButton = () => {
  sessionStorage.clear();
  alert("로그아웃되었습니다.");
  window.location.replace("/login");
};
