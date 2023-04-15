import axios from "axios";

const policyUrl = "/api/policy";
const token = sessionStorage.getItem("jwt");

// 개인정보처리방침 등록
export const createPolicy = (
  title: string,
  content: string,
  chapterNum: number,
) => {
  return axios.post(`${policyUrl}/create`, null, {
    params: { title, content, chapterNum },
    headers: { Authorization: `Bearer ${token}` },
  });
};

// 개인정보처리방침 수정
export const updatePolicy = (
  id: number,
  title: string,
  content: string,
  chapterNum: number,
) => {
  return axios.put(`${policyUrl}/update/${id}`, null, {
    params: { title, content, chapterNum },
    headers: { Authorization: `Bearer ${token}` },
  });
};

// 개인정보처리방침 전체 조회
export const findPolicyList = () => {
  return axios.get(`${policyUrl}/find`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// 개인정보처리방침 상세 조회
export const findPolicyDetail = (id: number) => {
  return axios.get(`${policyUrl}/find/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const findPolicyChapterList = () => {
  return axios.get(`${policyUrl}/findChapterNumList`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// 개인정보처리방침 삭제
export const deletePolicy = (id: number) => {
  return axios.delete(`${policyUrl}/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
