import pyautogui

# KakaoPicture1.png 파일과 동일한 그림을 찾아 좌표 출력
picPosition = pyautogui.locateOnScreen(r'11. PC_Kakao_Talk_Automation_Using_Automouse\KakaoPicture1.png')
print(picPosition)

# 앞의 과정에서 찾지 못했다면 KakaoPicture2.png 파일과 동일한 그림을 찾아 좌표 출력
if picPosition is None:
    picPosition = pyautogui.locateOnScreen(r'11. PC_Kakao_Talk_Automation_Using_Automouse\KakaoPicture2.png')
    print(picPosition)

# 앞의 과정에서 찾지 못했다면 KakaoPicture3.png 파일과 동일한 그림을 찾아 좌표 출력
if picPosition is None:
    picPosition = pyautogui.locateOnScreen(r'11. PC_Kakao_Talk_Automation_Using_Automouse\KakaoPicture3.png')
    print(picPosition)