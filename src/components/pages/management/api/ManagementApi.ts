import axios from "axios";

const UserUrl = "/api/user";
const token = sessionStorage.getItem("token");

// 전체 회원 조회 - 관리자
export const findUserList = () => {
  return axios.get(`${UserUrl}/find/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateNotAllowedNickname = (
  lastNickname: string,
  newNickname: string,
) => {
  return axios.put(`${UserUrl}/change/${lastNickname}`, null, {
    params: { newNickname },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
