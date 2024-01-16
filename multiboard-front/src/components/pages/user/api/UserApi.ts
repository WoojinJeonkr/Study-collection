import axios from "axios";

export const UserUrl = "/api/user";

const token = sessionStorage.getItem("jwt");

// 로그인
export const onLogin = (username: string, password: string) => {
  return axios.post(`${UserUrl}/login`, null, {
    params: { username, password },
  });
};

// 일반회원 회원가입
export const createUser = (
  username: string,
  password: string,
  nickname: string,
  email: string,
) => {
  return axios.post(`${UserUrl}/user/signup`, null, {
    params: { username, password, nickname, email },
  });
};

// 아이디 중복 검사
export const checkUsername = (username: string) => {
  return axios.get(`${UserUrl}/checkUsername`, { params: { username } });
};

// 닉네임 중복 검사
export const checkNickname = (nickname: string) => {
  return axios.get(`${UserUrl}/checkNickname`, { params: { nickname } });
};

// 이메일 중복 검사
export const checkEmail = (email: string) => {
  return axios.get(`${UserUrl}/checkEmail`, { params: { email } });
};

// 관리자 회원가입
export const createAdmin = (
  username: string,
  password: string,
  nickname: string,
  email: string,
) => {
  return axios.post(`${UserUrl}/admin/signup`, null, {
    params: { username, password, nickname, email },
  });
};

// 현재 접속 중인 유저 정보 검색
export const myInfo = () => {
  return axios
    .get(`${UserUrl}/find/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

// 특정 회원 nickname으로 상세 조회
export const findUser = (nickname: string) => {
  return axios.get(`${UserUrl}/find/detail/${nickname}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 회원 정보 분실 시 비밀번호 변경
export const reissuancePassword = (username: string, password: string) => {
  return axios.put(`${UserUrl}/modifyUserInfo`, null, {
    params: { username, password },
  });
};

// 회원 탈퇴
export const deleteUser = (nickname: string) => {
  return axios.delete(`${UserUrl}/delete/${nickname}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
