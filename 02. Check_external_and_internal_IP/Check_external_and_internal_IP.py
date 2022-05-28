import socket
import requests
import re

# 내부 IP 확인
in_addr = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
in_addr.connect(("www.google.co.kr", 443))

# 외부 IP 확인
req = requests.get("http://ipconfig.kr")
out_addr = re.search(r'IP Address: (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})', req.text)[1]

# 내부 및 외부 IP 출력
print("Internal IP:", in_addr.getsockname()[0], ", External IP:", out_addr)