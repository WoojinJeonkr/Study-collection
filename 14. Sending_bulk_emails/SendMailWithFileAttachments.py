import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

send_email = "보내는 Google 이메일 주소"
send_pwd = "Google 비밀번호"

recv_email = "받는 이메일 주소"

smtp_name = "smtp.gmail.com"
smtp_port = 587

msg = MIMEMultipart()

msg['subject'] = "첨부파일 테스트입니다"
msg['From'] = send_email
msg['To'] = recv_email

text = """
첨부파일 메일 텍스트입니다
감사합니다
"""

contentPart = MIMEText(text)
msg.attach(contentPart)

etc_file_path = r'14. Sending_bulk_emails\첨부파일.txt'
with open(etc_file_path, 'rb') as f:
    etc_part = MIMEApplication(f.read())
    etc_part.add_header('Content-Disposition', 
                        'attachment', filename='첨부파일.txt')
    msg.attach(etc_part)

s=smtplib.SMTP(smtp_name, smtp_port)
s.starttls()
s.login(send_email, send_pwd)
s.sendmail(send_email, recv_email, msg.as_string())
s.quit()