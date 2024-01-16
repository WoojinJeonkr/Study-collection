import { updateAdmin, updateUser } from "components";
import dayjs from "dayjs";

export const dateFormatter = (currday: string | undefined) => {
  const changeDay = dayjs(currday);
  return changeDay.format("YYYY년 MM월 DD일 HH시 mm분 ss초");
};

// 비밀번호 유효성 검사
export const validateProfilePassword = (password: string) => {
  return password.toLowerCase().match(/^[a-zA-Z0-9]{8,12}$/);
};

// 닉네임 유효성 검사
export const validateProfileNickname = (nickname: string) => {
  return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,9}$/);
};

// 이메일 유효성 검사
export const validateProfileEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    );
};

// Password 오류 메시지 표시
export const displayProfilePasswordMsg = (password: string) => {
  if (password.replace(/(\s*)/g, "").length < 1) {
    return "비밀번호를 입력해주세요.";
  }
  if (validateProfilePassword(password)) {
    return "사용가능한 비밀번호입니다.";
  }
  return "글자 수 오류: 8글자 ~ 12글자";
};

// Nickname 오류 메시지 표시
export const displayProfileNicknameMsg = (nickname: string) => {
  if (nickname.replace(/(\s*)/g, "").length < 1) {
    return "닉네임을 입력해주세요.";
  }
  if (!validateProfileNickname(nickname)) {
    return "글자 수 오류: 2글자 ~ 7글자";
  }
  return "닉네임 형식에 부합합니다.";
};

// Email 오류 메시지 표시
export const displayProfileEmailMsg = (email: string) => {
  if (email.replace(/(\s*)/g, "").length < 1) {
    return "이메일을 입력해주세요.";
  }
  if (!validateProfileEmail(email)) {
    return "이메일 형식으로 입력해주세요";
  }
  return "이메일 형식에 부합합니다.";
};

export const handleUserUpdateButton = (
  username: string,
  password: string,
  email: string,
  nickname: string,
) => {
  updateUser(username, password, nickname, email)
    .then(() => {
      alert("회원 정보가 수정되었습니다.");
      window.location.replace("/profile");
    })
    .catch((e) => alert(e));
};

export const handleAdminUpdateButton = (
  username: string,
  password: string,
  email: string,
  nickname: string,
) => {
  updateAdmin(username, password, nickname, email)
    .then((res) => {
      sessionStorage.setItem("user", JSON.stringify(res.data));
      alert("회원 정보가 수정되었습니다.");
      window.location.replace("/profile");
    })
    .catch((e) => alert(e));
};
