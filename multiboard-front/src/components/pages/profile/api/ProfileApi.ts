import axios from "axios";

const UserUrl = "/api/user";
const BoardUrl = "/api/board";
const QuestionUrl = "/api/question";
const token = sessionStorage.getItem("jwt");

// 일반회원 회원정보 수정
export const updateUser = (
  username: string,
  password: string,
  nickname: string,
  email: string,
) => {
  return axios.put(`${UserUrl}/user/update`, null, {
    params: { username, password, nickname, email },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 관리자 회원정보 수정
export const updateAdmin = (
  username: string,
  password: string,
  nickname: string,
  email: string,
) => {
  return axios.put(`${UserUrl}/admin/update`, null, {
    params: { username, password, nickname, email },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 현재 접속 중인 유저 정보 검색
export const myProfileInfo = () => {
  return axios
    .get(`${UserUrl}/find/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

// 가장 최근에 자유게시판에 작성한 질문글 조회
export function findBoardRecent() {
  return axios.get(`${BoardUrl}/find/first`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// 가장 최근에 Q&A에 작성한 질문글 조회
export function findQuestionRecent(writer: string) {
  return axios.get(`${QuestionUrl}/find/first`, {
    params: { writer },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
