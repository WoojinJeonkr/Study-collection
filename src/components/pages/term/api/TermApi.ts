import axios from "axios";

const termUrl = "/api/term";
const token = sessionStorage.getItem("jwt");

export const createTerm = (
  title: string,
  chapterNum: number,
  content: string,
) => {
  return axios.post(`${termUrl}/create`, null, {
    params: { title, chapterNum, content },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const findTermList = () => {
  return axios.get(`${termUrl}/find`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const findChapterNumberList = () => {
  return axios.get(`${termUrl}/findChapterNumList`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateTerm = (
  id: number,
  title: string,
  content: string,
  chapterNum: number,
) => {
  return axios.put(`${termUrl}/update/${id}`, null, {
    params: { title, content, chapterNum },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTerm = (id: number) => {
  axios.delete(`${termUrl}/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
