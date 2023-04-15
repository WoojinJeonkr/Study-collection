export interface Authority {
  authorityName: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  nickname: string;
  activated: boolean;
  authorities: Authority;
  createdDate: string;
  modifiedDate: string;
}
