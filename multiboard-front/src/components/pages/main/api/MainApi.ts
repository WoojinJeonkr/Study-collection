import axios from "axios";

const token = sessionStorage.getItem("jwt");
const boardUrl = "/api/board";
const noticeUrl = "/api/notice";
const faqUrl = "/api/faq";
const questionUrl = "/api/question";

export const findTopFiveBoard = () => {
  return axios.get(`${boardUrl}/find/five`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const findTopFiveNotice = () => {
  return axios.get(`${noticeUrl}/find/five`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const findTopFiveFaq = () => {
  return axios.get(`${faqUrl}/find/five`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const findTopFiveQuestion = () => {
  return axios.get(`${questionUrl}/find/five`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
