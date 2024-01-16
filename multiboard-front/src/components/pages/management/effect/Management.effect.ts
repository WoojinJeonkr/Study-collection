import { updateNotAllowedNickname } from "components";

export const handleUpdateButton = (lastNickname: string) => {
  const userNickname = JSON.parse(
    sessionStorage.getItem("user") as unknown as string,
  )?.nickname;
  if (lastNickname === userNickname) {
    alert(
      "본인입니다. 회원 수정을 시도하셨나요? 회원 수정은 '메뉴-프로필'에서 진행할 수 있습니다.",
    );
  } else {
    const changedNickname = "부적절한 닉네임";
    updateNotAllowedNickname(lastNickname, changedNickname)
      .then((res) => alert(res.data))
      .then(() => window.location.replace("/management"));
  }
};
