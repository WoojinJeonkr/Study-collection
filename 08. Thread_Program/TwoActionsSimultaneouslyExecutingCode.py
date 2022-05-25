import threading # 쓰레드를 사용하기 위한 모듈
import time

# 1초마다 쓰레드 1 동작을 프린트하는 함수
def thread_1():
    while True:
        print("쓰레드 1 동작")
        time.sleep(1.0)

t1 = threading.Thread(target=thread_1) # 쓰레드 설정
t1.start() # 쓰레드 시작

# 메인코드로 '메인동작'을 2초마다 출력
while True:
    print("메인동작")
    time.sleep(2.0)