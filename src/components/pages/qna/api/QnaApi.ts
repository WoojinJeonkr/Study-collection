import axios from "axios";

const questionUrl = "/api/question";
const answerUrl = "/api/answer";
const token = sessionStorage.getItem("jwt");

// Question 등록
export const createQuestion = (
  title: string,
  content: string,
  writer: string,
) => {
  return axios.post(`${questionUrl}/create`, null, {
    params: { title, content, writer },
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Question 수정
export const updateQuestion = (
  id: number,
  title: string,
  content: string,
  writer: string,
) => {
  return axios.put(`${questionUrl}/update/${id}`, null, {
    params: { title, content, writer },
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Question 전체 조회
export const findQnaList = () => {
  return axios.get(`${questionUrl}/findList`);
};

// Question 상세 조회
export const findQna = (id: number) => {
  return axios.get(`${questionUrl}/find/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Question 삭제
export const deleteQna = (id: number) => {
  return axios.delete(`${questionUrl}/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Answer 등록
export const createAnswer = (id: number, content: string, writer: string) => {
  return axios.post(`${answerUrl}/create/${id}`, null, {
    params: { content, writer },
    headers: { Authorization: token },
  });
};

// Answer 수정
export const updateAnswer = (id: number, content: string, writer: string) => {
  return axios.put(`${answerUrl}/update/${id}`, null, {
    params: { content, writer },
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Answer 삭제
export const deleteAnswer = (id: number, nickname: string) => {
  return axios.delete(`${answerUrl}/delete/${id}`, {
    params: { nickname },
    headers: { Authorization: `Bearer ${token}` },
  });
};
