import axios from "axios";

export const noticeUrl = "/api/notice";

const token = sessionStorage.getItem("jwt");

// 공지사항 등록
export const createNotice = (
  title: string,
  content: string,
  writer: string,
) => {
  return axios.post(`${noticeUrl}/create`, null, {
    params: { title, content, writer },
    headers: {
      Authorization: token,
    },
  });
};

// 공지사항 수정
export const updateNotice = (
  id: number,
  title: string,
  content: string,
  writer: string,
) => {
  return axios.put(`${noticeUrl}/update/${id}`, null, {
    params: { title, content, writer },
    headers: {
      Authorization: token,
    },
  });
};

// 전체 공지사항 조회
export const findNoticeList = () => {
  return axios.get(`${noticeUrl}/find`);
};

// 공지사항 상세 조회
export const findNotice = (id: number) => {
  return axios.get(`${noticeUrl}/find/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

// notice 삭제
export const deleteNotice = (id: number, nickname: string) => {
  return axios.delete(`${noticeUrl}/delete/${id}`, {
    params: { nickname },
    headers: {
      Authorization: token,
    },
  });
};
