from os import linesep
import googletrans

translator = googletrans.Translator()

read_file_path = r"9. Automatic_Translation\Original.txt" # 파일을 읽어올 경로 지정

# 파일에서 줄별로 읽어 readlines에 리스트 형태로 바인딩
with open(read_file_path, 'r') as f:
    readLines = f.readlines()

# 리스트 형태로 저장된 readLines에서 한 줄 씩 한글 변환해 출력
for lines in readLines:
    result1 = translator.translate(lines, dest='ko')
    print(result1.text)