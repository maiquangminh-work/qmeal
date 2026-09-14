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
    "Thịt kho tàu", "Thịt kho", "Sườn xào", "Sườn xào chua ngọt",
    "Cá lóc", "Cá kho tộ", "Canh cua", "Bún chả", "Rau muống xào", 
    "Bắp cải", "Cơm rang", "Mì xào"
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
                pass
    except Exception as e:
        pass
