from urllib.request import urlopen
from bs4 import BeautifulSoup

"""
 _____ __  __ _____   ____  _____ _______       _   _ _______ 
|_   _|  \/  |  __ \ / __ \|  __ \__   __|/\   | \ | |__   __|
  | | | \  / | |__) | |  | | |__) | | |  /  \  |  \| |  | |   
  | | | |\/| |  ___/| |  | |  _  /  | | / /\ \ | . ` |  | |   
 _| |_| |  | | |    | |__| | | \ \  | |/ ____ \| |\  |  | |   
|_____|_|  |_|_|     \____/|_|  \_\ |_/_/    \_\_| \_|  |_|   
                                                               
This script fucking sucks, but it works. I don't write it having in mind that someone is going to contribute to it.
"""

url = "https://nelua.io/libraries/"
html = urlopen(url).read()
soup = BeautifulSoup(html, features="html.parser")

# kill all script and style elements
for script in soup(["script", "style"]):
    script.extract()    # rip it out

# get text
text = soup.get_text()

class Elements(object):
    name = ""
    link = ""
    fn_name = ""
    code = ""
    code_min = ""

    def __str__(self) -> str:
        return f"function mod_{self.fn_name}()" "\n{\n" f"const io_mod = new vscode.CompletionItem('{self.name}', vscode.CompletionItemKind.Function);\n" "io_mod.detail = " f"'{self.code_min};'\n" f"const docs = new vscode.MarkdownString(`#### [docs](https://nelua.io/libraries/#{self.link})\n\n\\`\\`\\`nelua\n{self.code_min}\n\\`\\`\\`\n WIP`);\n" "io_mod.documentation = docs;\n" "return io_mod;\n" "\n}\n"

elements: list[Elements] = list()

def make_link_name(el, co) -> str:
    e = Elements()
    e.name = el.text
    e.link = el["id"]
    e.fn_name = el["id"].replace("-", "_")
    e.code_min = co
    elements.append(e)
    

def get_link_name():
    ex = (
        "for k,v in pairs(a) do body end",
        "for i,v in ipairs(a) do body end",
        "for p, c in utf8.codes(s) do end",
        "for c in filestream:lines(1) do body end",
        "return seq[i], seq[i+1], ..., seq[j]"
    )

    codes = list()
    for e in soup.find_all("pre"):
        codes.append(e.text.replace('\r', '').replace('\n', ''))

    filtered = filter(lambda x: not x in ex, codes)
    
    for e1, e2 in zip(soup.findAll("h3"), filtered):
        #print(e2.text)
        if not e2 in ex:
            make_link_name(e1, e2)
    

get_link_name()
with open("libs.ts", "a") as f:
    f.write("/* File generted with utils/gendocs.py */\n")
    f.write("import * as vscode from 'vscode';\n\n")

    f.write("export const libs = [\n")
    for e in elements:
        f.write(f"\tmod_{e.fn_name}(),\n")
    f.write("];\n\n")

    for e in elements:
        f.write(str(e) + "\n")
    