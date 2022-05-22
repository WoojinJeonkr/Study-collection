import requests
from bs4 import BeautifulSoup

# 환율비를 가져오는 함수
def get_exchange_rate(x, y):
    headers = {
        'user-Agent': 'Mozilla/5.0',
        'Content-Type': 'text/html; charset=utf-8'
    }
    
    req = requests.get('https://kr.investing.com/currencies/{}-{}'.format(x, y), headers=headers)
    source = req.text
    soup = BeautifulSoup(source, 'html.parser') # beautifulsoup 라이브러리를 이용해 html로 보기 값을 찾기 좋게 함
    top_list = soup.select("#__next > div.desktop\:relative.desktop\:bg-background-default > div > div > div.grid.gap-4.tablet\:gap-6.grid-cols-4.tablet\:grid-cols-8.desktop\:grid-cols-12.grid-container--fixed-desktop.general-layout_main__3tg3t > main > div > div.instrument-header_instrument-header__1SRl8.mb-5.bg-background-surface.tablet\:grid.tablet\:grid-cols-2 > div > div.instrument-price_instrument-price__3uw25.flex.items-end.flex-wrap.font-bold > span")
    print(top_list[0].text) # 환율 정보 출력

get_exchange_rate('usd', 'krw')