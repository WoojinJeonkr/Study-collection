import requests
import re

# 접속할 뉴스 페이지 주소
url = 'https://news.v.daum.net/v/20220528172655358'

# 헤더 정보 입력
headers = {
    'User-Agent' : 'Mozilla/5.0',
    'Content-type' : 'text/html; charset=utf-8'
}

# url로 접속
response = requests.get(url, headers=headers)

# 이메일 탐색
results = re.findall(r'[\w\.-]+@[\w\.-]+', response.text)

# 탐색한 이메일에서 중복 제거
result = list(set(results))

# 출력
print(result)

# 결과는 [이메일 형태의 이메일]과 같이 리스트 형태로 반환