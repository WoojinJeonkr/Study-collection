import re # 정규표현식 사용을 위해 import

# test 용도로 사용할 문자열
test_string = """
aaa@bbb.com
123@abc.co.kr
test@hello.kr
ok@ok.co.kr
ok@ok.co.kr
ok@ok.co.kr
no.no.kr
no.kr
"""
# 문자열에서 이메일 형식을 찾아 리스트 형태로 반환
result = re.findall(r'[\w\.-]+@[\w\.-]+', test_string)

# 중복 내용 제거
results = list(set(result))

# 중복 내용이 제거된 반환 결과 출력
print(results)

## 결과
# ['aaa@bbb.com', 'test@hello.kr', '123@abc.co.kr', 'ok@ok.co.kr']