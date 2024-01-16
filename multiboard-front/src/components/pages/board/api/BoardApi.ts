import axios from "axios";

export const boardUrl = "/api/board";
export const commentUrl = "/api/comment";

// 게시글 등록
export const createBoard = (title: string, content: string, writer: string) => {
  return axios.post(`${boardUrl}/create`, null, {
    params: { title, content, writer },
  });
};

// 게시글 상세 조회
export const findBoard = (id: number) => {
  return axios.get(`${boardUrl}/find/${id}`);
};

// 전체 게시글 조회 (최신순)
export const findBoardListDesc = () => {
  return axios.get(`${boardUrl}/find/newList`);
};

// 전체 게시글 조회 (오래된순)
export const findBoardListAsc = () => {
  return axios.get(`${boardUrl}/find/oldList`);
};

// 게시글 수정
export const updateBoard = (
  id: number,
  title: string,
  content: string,
  writer: string,
) => {
  return axios.put(`${boardUrl}/update/${id}`, null, {
    params: { title, content, writer },
  });
};

// 게시글 삭제
export const deleteBoard = (id: number, nickname: string) => {
  return axios.delete(`${boardUrl}/delete/${id}`, {
    params: nickname,
  });
};

// 댓글 등록
export const createComment = (id: number, content: string, writer: string) => {
  return axios.post(`${commentUrl}/create/${id}`, { params: content, writer });
};

// 댓글 수정
export const updateComment = (id: number, content: string, writer: string) => {
  return axios.put(`${commentUrl}/update/${id}`, { params: content, writer });
};

// 답글 등록
export const createReply = (
  id: number,
  nickname: string,
  content: string,
  writer: string,
) => {
  return axios.post(`${commentUrl}/createReply/${id}`, {
    params: { nickname, content, writer },
  });
};

// 답글 수정
export const updateReply = (
  id: number,
  nickname: string,
  content: string,
  writer: string,
) => {
  return axios.put(`${commentUrl}/updateReply/${id}`, {
    params: { nickname, content, writer },
  });
};
