import dayjs from "dayjs";

export const displayDatePattern = (date: string) => {
  return dayjs(date).format("YYYY년 MM월 DD일 HH:mm:ss");
};
