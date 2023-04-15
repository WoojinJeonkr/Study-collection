// word가 빈 값인 경우 msg를 alert로 표시
export const alertMsg = (word: string, msg: string) => {
  const noBlankWord = word.replace(/(\s*)/g, "");
  if (noBlankWord.length === 0) {
    alert(msg);
  }
};
