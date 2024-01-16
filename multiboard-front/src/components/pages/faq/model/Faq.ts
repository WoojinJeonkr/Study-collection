import { User } from "components";

export interface Faq {
  id: number;
  question: string;
  answer: string;
  user: User;
}
