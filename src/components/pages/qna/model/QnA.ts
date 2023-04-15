import { User } from "components/pages/user/model/User";

export interface Question {
  id: number;
  title: string;
  question: string;
  writer: string;
  user: User;
  answer: Answer;
  createdDate: string;
  modifiedDate: string;
}

export interface Answer {
  id: number;
  answer: string;
  writer: string;
  user: User;
  question: Question;
  createdDate: string;
  modifiedDate: string;
}
