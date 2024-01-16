from urllib import response
import requests # 사이트 접속을 위한 모듈
import re # IP 주소를 찾기 위한 정규식을 사용하기 위한 모듈

req = requests.get("http://ipconfig.kr") # http://ipconfig.kr에 접속
# 정규식 표현을 통해 IP 주소 가져옴
out_addr = re.search(r'IP Address: (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})', req.text)[1]
print(out_addr) # out_addr 출력