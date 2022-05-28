import socket # 컴퓨터가 연결된 접속 정보를 받아올 때 사용하는 모듈

in_addr = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # socket 연결
in_addr.connect(("www.google.co.kr", 443)) # www.google.co.kr에 접속, https 기본 포트: 443
print(in_addr.getsockname()[0]) # 연결된 socket 이름 출력