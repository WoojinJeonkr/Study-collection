import axios from "axios";

const faqUrl = "/api/faq";
const token = sessionStorage.getItem("jwt");

// FAQ 등록
export const createFaq = (question: string, answer: string, writer: string) => {
  return axios.post(`${faqUrl}/create`, null, {
    params: { question, answer, writer },
    headers: {
      Authorization: token,
    },
  });
};

// FAQ 수정
export const updateFaq = (
  id: number,
  question: string,
  answer: string,
  writer: string,
) => {
  return axios.put(`${faqUrl}/update/${id}`, null, {
    params: { question, answer, writer },
    headers: {
      Authorization: token,
    },
  });
};

// FAQ 조회
export const findFaqList = () => {
  return axios.get(`${faqUrl}/find`);
};

// FAQ 삭제
export const deleteFaq = (id: number, nickname: string) => {
  return axios.delete(`${faqUrl}/delete/${id}`, {
    params: { nickname },
    headers: {
      Authorization: token,
    },
  });
};
