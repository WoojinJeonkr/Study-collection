from email import header
import pandas as pd

# 데이터프레임 생성
df = pd.DataFrame([["홍길동", "1990.01.01", "2021-0001"], 
                   ["김민준", "1990.05.06", "2021-0002"],
                   ["김철수", "2000.08.08", "2021-0003"],
                   ["김영희", "2000.09.09", "2021-0004"],
                   ["이서준", "2010.10.10", "2021-0005"],
                   ["장다인", "2011.12.12", "2021-0006"]])
print(df)

# 데이터프레임 엑셀로 저장(header, index 저장 x)
df.to_excel(r'12. Import_Excel_Information_Automatical_Generate_Certification\수료증명단.xlsx', 
            index=False, 
            header=False
            )