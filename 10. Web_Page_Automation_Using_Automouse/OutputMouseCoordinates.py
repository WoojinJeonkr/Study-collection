import pyautogui
import time

while True:
    print(pyautogui.position()) # 마우스의 좌표 출력
    time.sleep(0.1) # 0.1초 기다림
    
# 오토 마우스 라이브러리의 기능
# 1. pyautogui.position(): 마우스의 좌표를 입력 받음
# 2. pyautogui.moveTo(x,y): x, y의 좌표(절대 좌표)로 이동
# 3. pyautogui.moveTo(x,y,시간): x, y의 좌표로 지정된 시간동안 이동
# 4. pyautogui.moveRel(x,y): 현재 마우스 위치로부터 x,y 픽셀만큼 이동
# 5. pyautogui.click(): 현재 마우스 커서 위치에 마우스 클릭
# 6. pyautogui.doubleClick(): 현재 마우스 커서 위치에 마우스 더블클릭
# 7. pyautogui.click((50,50)): 50,50의 위치에 마우스 클릭
# 8. pyautogui.click(x=50, y=50): x=50, y=50의 위치에 마우스 클릭
# 9. pyautogui.rightClick(): 현재 마우스 커서 위치에 마우스를 우클릭
# 10. pyautogui.dragTo(x=50, y=50, duration=2): 현재 마우스 위치부터 50,50 좌표까지 2초 동안 드래그
# 11. pyautogui.typewrite("ABC"): ABC를 입력(pyperclip 라이브러리 사용)
# 12. pyautogui.typewrite("ABC", interval=1): 1초 동안 ABC 입력
# 13. pyautogui.hotkey("Ctrl", "V"): hotkey를 이용하여 Ctrl+V 입력
# 14. pyautogui.screenshot("저장경로", region=(100,100,50,50)): region=(x좌표, Y좌표, 가로 사이즈, 세로 사이즈) 지역을
#                                                              screenshot을 이용하여 부분 캡쳐