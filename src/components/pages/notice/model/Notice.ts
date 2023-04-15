import { User } from "components";

export interface Notice {
  id: number;
  title: string;
  content: string;
  writer: string;
  viewCnt: string;
  user: User;
  createdDate: string;
  modifiedDate: string;
}
