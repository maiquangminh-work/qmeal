import urllib.request
import urllib.parse
import json
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

dishes = [
    "Thịt kho tàu", "Sườn xào chua ngọt", "Cá lóc kho tộ", "Đậu phụ", 
    "Trứng chiên", "Canh chua", "Phở", "Cơm tấm", "Bánh mì", "Gỏi cuốn",
    "Rau muống"
]

for dish in dishes:
    query = urllib.parse.quote(dish)
    url = f"https://vi.wikipedia.org/w/api.php?action=query&titles={query}&prop=pageimages&format=json&pithumbsize=800"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req, context=ctx)
        res = json.loads(response.read())
        pages = res['query']['pages']
        for page_id, page_info in pages.items():
            if 'thumbnail' in page_info:
                print(f"{dish}: {page_info['thumbnail']['source']}")
            else:
                print(f"{dish}: No image found")
    except Exception as e:
        print(f"Error for {dish}: {e}")
