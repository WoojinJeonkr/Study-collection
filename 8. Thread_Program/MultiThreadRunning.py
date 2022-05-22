import threading

# name과 value를 입력받아 value의 회수만큼 반복하는 함수 생성
def sum(name, value):
    for i in range(0, value):
        print(name,":",i)

t1 = threading.Thread(target=sum, args=('1번 쓰레드', 10)) # t1 쓰레드 생성(name: 1번 쓰레드, value: 10)
t2 = threading.Thread(target=sum, args=('2번 쓰레드', 10)) # t2 쓰레드 생성(name: 2번 쓰레드, value: 10)

t1.start() # t1 시작
t2.start() # t2 시작

print('Main Tread') # 메인 쓰레드 출력