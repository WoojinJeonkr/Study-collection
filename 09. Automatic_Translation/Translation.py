import googletrans # googletrans 불러오기

translator = googletrans.Translator()

# 행복하세요 --> 영어로 번역해 출력
str1 = "행복하세요"
result1 = translator.translate(str1, dest='en', src='auto') # dest = 번역할 문자, src = 번역할 문자의 언어
print("행복하세요 => ", result1.text)

# I am happy --> 한글로 번역해서 출력
str2 = "I am happy"
result2 = translator.translate(str2, dest='ko', src='en')
print("I am happy => ", result2.text)