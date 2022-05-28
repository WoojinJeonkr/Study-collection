from os import linesep
import googletrans

translator = googletrans.Translator()

read_file_path = r"9. Automatic_Translation\Original.txt" # 읽어올 경로와 파일명 지정
write_file_path = r"9. Automatic_Translation\TranslationKorText.txt" # 저장할 경로와 파일명 지정

with open(read_file_path, 'r') as f:
    readLines = f.readlines()

for lines in readLines:
    result1 = translator.translate(lines, dest='ko')
    print(result1.text)
    with open(write_file_path, 'a', encoding='UTF8') as f: # 파일 저장
        f.write(result1.text + '\n') # 한 줄 작성 후 줄바꿈