import random

random_number = random.randint(1, 100) # 1 ~ 100 사이의 임의 숫자를 생성 후 random_number에 바인딩

game_count = 1 # 게임의 회수를 세기 위한 변수 생성 후 1의 값이 저장된 주소 번지 바인딩

while True: # while True를 사용해 무한 반복
    try:
        user_number = int(input("Please enter a number between 1 and 100: ")) # 입력 받은 값을 int를 사용해 숫자형을 변환
        
        if user_number > random_number: # 입력 값이 임의로 생성된 숫자보다 크다면 print문 출력
            print("Down")
        elif user_number < random_number: # 입력 값이 임의로 생성된 숫자보다 작다면 print문 출력
            print("Up")
        elif user_number == random_number: # 입력 값이 임의로 생성된 숫자보다 같다면 print문 출력 후 break로 while문 종료
            print("Correct!!", game_count, "rounds now.")
            break
        
        game_count = game_count + 1 # while문이 한 번 실행될 때마다 몇 번 안에 맞추는 지 회수 세기
    except:
        print("Unknown Error.. Please enter number")
    