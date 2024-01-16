import { User } from "components";

export interface Board {
  id: number;
  title: string;
  content: string;
  writer: string;
  viewCnt: string;
  goodCnt: string;
  badCnt: string;
  totalCnt: string;
  user: User;
  comments: Comment;
  createdDate: string;
  modifiedDate: string;
}

export interface Comment {
  id: number;
  comments: string;
  groupNum: number;
  user: User;
  board: Board;
  parent: boolean;
  createdDate: string;
  modifiedDate: string;
}
