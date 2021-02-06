import json
import os

SPECIAL = ("10750104.png", "10350505.png")
if __name__ == "__main__":
    sorted_icons = {}
    for root, _, files in os.walk("icons_l"):
        for fn in files:
            if fn not in SPECIAL:
                try:
                    sorted_icons[fn[0:3]].append(fn)
                except KeyError:
                    sorted_icons[fn[0:3]] = [fn]
    with open("tierabr_data.js", "w") as fp:
        fp.write("const ICON_INDEX = ")
        json.dump(sorted_icons, fp)