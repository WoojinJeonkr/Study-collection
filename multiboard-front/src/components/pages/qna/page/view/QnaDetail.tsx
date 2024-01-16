import {
  AnswerDetailForm,
  findQna,
  Question,
  QuestionDetailForm,
} from "components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function QnaDetail() {
  const questionId = useParams()?.id as unknown as number;
  const [question, setQuestion] = useState<Question>();
  const questionItem = question as unknown as Question;
  useEffect(() => {
    findQna(questionId).then((res) => setQuestion(res.data));
  }, []);
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <h2>Q&A 상세보기</h2>
      <QuestionDetailForm question={questionItem} />
      {question?.answer !== null ? (
        <AnswerDetailForm answer={questionItem?.answer} />
      ) : (
        <div />
      )}
    </div>
  );
}

export default QnaDetail;
