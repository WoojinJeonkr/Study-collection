import dayjs from "dayjs";

export const dateFormatSimplePattern = (currday: string | undefined) => {
  const changeDay = dayjs(currday);
  return changeDay.format("YYYY년 MM월 DD일");
};

export const dateFormatPattern = (currday: string | undefined) => {
  const changeDay = dayjs(currday);
  return changeDay.format("YYYY년 MM월 DD일 HH시 mm분 ss초");
};
