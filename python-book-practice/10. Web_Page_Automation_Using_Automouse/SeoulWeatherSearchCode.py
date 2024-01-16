import pyautogui
import time
import pyperclip

pyautogui.moveTo(1320,260,0.2) # 네이버 검색창의 좌표를 0.2초동안 이동
pyautogui.click() # 마우스 클릭서울 날씨

time.sleep(0.5) # 0.5초 기다림

pyperclip.copy("서울 날씨") # 클립보드에 서울 날씨 저장
pyautogui.hotkey("ctrl", "v") # ctrl+v 키 입력
time.sleep(0.5) # 0.5초 기다림

pyautogui.write(["enter"]) # 엔터키 입력
time.sleep(1) # 1초 기다림

# 시작 x,y 좌표, 종료 x,y 좌표 입력
start_x = 992
start_y = 220
end_x = 1656
end_y = 635

# screenshot을 찍어 지정한 경로에 서울날씨.png로 저장
pyautogui.screenshot(r'10. Web_Page_Automation_Using_Automouse\서울날씨.png', 
                     region=(start_x, start_y, end_x-start_x, end_y-start_y))