import pyautogui
import pyperclip
import time
import threading

# 카카오톡에 메시지를 보내는 코드를 send_message 함수로 생성
def send_message():
    threading.Timer(10, send_message).start()
    
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

    # 이미지에서 중간 좌표값 찾기
    ClickPosition = pyautogui.center(picPosition)
    pyautogui.doubleClick(ClickPosition) # 더블 클릭

    # 이 메세지는 자동으로 보내는 메세지입니다를 붙여넣고 1초 동안 기다림
    pyperclip.copy("이 메세지는 자동으로 보내는 메세지입니다")
    pyautogui.hotkey("ctrl", "v")
    time.sleep(1.0)

    # 엔터를 누르고 1초 동안 기다림
    pyautogui.write(["enter"])
    time.sleep(1.0)

    # esc를 눌러 창을 닫고 1초 동안 기다림
    pyautogui.write(["escape"])
    time.sleep(1.0)

send_message() # 실행되면 10초마다 메세지를 보냄