import itertools # 효율적인 반복을 위한 반복자를 생성하는 함수
import zipfile

# 함수화(입력값: 암호 문자열, 암호 최소 길이, 암호 최대 길이, 압축 파일)
def un_zip(passwd_string, min_len, max_len, zFile):
    for len in range(min_len, max_len+1): # min_len ~ max_len까지 반복
        # passwd_string의 모든 문자열을 repeat=길이로 정렬하여 반환
        to_attempt = itertools.product(passwd_string, repeat=len)
        for attempt in to_attempt:
            passwd = ' '.join(attempt) # .join(리스트): 리스트의 값을 문자열로 반환
            print(passwd)
            try:
                zFile.extractall(pwd = passwd.encode())
                print("비밀번호는 ", passwd, "입니다.")
                return 1
            except:
                pass
        
# 숫자, 영문 소/대문자의 문자열 바인딩
passwd_string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

zFile = zipfile.ZipFile(r"6. Unzip_Compressed_File\축하합니다.zip")

min_len = 1
max_len = 5

unzip_result = un_zip(passwd_string, min_len, max_len, zFile)

if unzip_result == 1:
    print("암호를 찾았습니다!!")
else:
    print("암호를 찾는데 실패했습니다..")
