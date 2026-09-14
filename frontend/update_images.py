import re

file_path = "d:/.vscode/qmeal/frontend/src/data/dishes.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

images_map = {
    'thit-kho-tau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Thit_kho_tau.jpg/800px-Thit_kho_tau.jpg',
    'suon-xao-chua-ngot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sweet_and_sour_pork_ribs.jpg/800px-Sweet_and_sour_pork_ribs.jpg',
    'ca-loc-kho-to': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/C%C3%A1_l%C3%B3c_kho_t%E1%BB%99.jpg/800px-C%C3%A1_l%C3%B3c_kho_t%E1%BB%99.jpg',
    'dau-phu-nhoi-thit': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Stuffed_Tofu_in_Tomato_Sauce.jpg/800px-Stuffed_Tofu_in_Tomato_Sauce.jpg',
    'trung-duc-thit': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Trung_Chien.jpg/800px-Trung_Chien.jpg',
    'thit-rang-chay-canh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Thit_rang_chay_canh.jpg/800px-Thit_rang_chay_canh.jpg',
    'canh-cua-rau-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Canh_cua_rau_day.jpg/800px-Canh_cua_rau_day.jpg',
    'canh-chua-ca-loc': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Canhchua2.jpg',
    'canh-ngao-nau-chua': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Canh_ngheu.jpg/800px-Canh_ngheu.jpg',
    'canh-cai-thit-bam': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Canh_cai_ngot.jpg/800px-Canh_cai_ngot.jpg',
    'rau-muong-xao-toi': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Tumis_kangkung_Makassar.JPG',
    'bap-cai-xao-ca-chua': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Stir_fried_cabbage.jpg/800px-Stir_fried_cabbage.jpg',
    'pho-bo-tai-lan': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Ph%E1%BB%9F_b%C3%B2%2C_C%E1%BA%A7u_Gi%E1%BA%A5y%2C_H%C3%A0_N%E1%BB%99i.jpg',
    'com-tam-suon-bi-cha': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg',
    'banh-mi-chao-dac-biet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Banh_mi_chao.jpg/800px-Banh_mi_chao.jpg',
    'goi-cuon-tom-thit': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Summer_roll.jpg'
}

for dish_id, img_url in images_map.items():
    # Find block of dish_id and replace its image field
    pattern = r"(id:\s*'" + dish_id + r"'.*?image:\s*')[^']+(')"
    content = re.sub(pattern, r"\1" + img_url + r"\2", content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Images replaced successfully!")
