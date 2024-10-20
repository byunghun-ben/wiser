from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import json
import os

url = 'https://m.wisely.store'
driver = webdriver.Chrome()
driver.get(url)

try:
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, 'div.main_pro_list'))
    )
    
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    
    prd_list_list = soup.select('div.main_pro_list ul.prd_list')
    # key-value pair
    prd_map = {}
    
    for prd_list in prd_list_list:
        data_section = prd_list.get('data-section').replace('카테고리 BEST - ', '')
        prd_list_items = prd_list.select('li[data-product-no]')
        prd_map[data_section] = []
        
        for prd_list_item in prd_list_items:
            prd_no = prd_list_item.get('data-product-no')
            prd_product_name = prd_list_item.get('data-product-name')
            thumbnail = prd_list_item.select_one('img').get('src').replace('//', 'https://')
            prd_map[data_section].append({
                'prd_no': prd_no,
                'prd_product_name': prd_product_name,
                'thumbnail': thumbnail
            })
            
    # JSON 형태로 파일 저장
    json_data = json.dumps(prd_map, ensure_ascii=False, indent=4)
    
    # 디렉토리가 존재하지 않으면 생성
    os.makedirs('./output', exist_ok=True)
    
    with open('./output/prd_list.json', 'w', encoding='utf-8') as file:
        file.write(json_data)
finally:
    driver.quit()