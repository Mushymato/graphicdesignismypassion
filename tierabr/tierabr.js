const GENERIC_ICONS = {
    SWORD: "101",
    BLADE: "102",
    DAGGER: "103",
    AXE: "104",
    LANCE: "105",
    BOW: "106",
    WAND: "107",
    STAFF: "108",
    GUN: "109"
};
const UNIQUE_ICONS = {
    SEIMEI: "10750104.png",
    JOKER: "10350505.png"
};
const RANKINGS = {
    S: ['SWORD', 'BLADE', 'GUN'],
    A: ['DAGGER', 'AXE'],
    B: ['WAND', 'SEIMEI', 'LANCE', 'STAFF'],
    C: ['JOKER'],
    D: ['BOW']
};
const ICON_FOLDER = 'icons_l';

function buildIcon(key) {
    const icon = document.createElement("img");
    if (GENERIC_ICONS.hasOwnProperty(key)) {
        const iconList = ICON_INDEX[GENERIC_ICONS[key]];
        const random = Math.floor(Math.random() * iconList.length);
        icon.setAttribute("src", `${ICON_FOLDER}/${iconList[random]}`);
    } else {
        icon.setAttribute("src", `${ICON_FOLDER}/${UNIQUE_ICONS[key]}`);
        icon.setAttribute("class", "unique")
    }
    return icon;
}

function buildTier() {
    for (const tier of Object.keys(RANKINGS)) {
        const tierTd = document.getElementById(`rank-${tier}`);
        tierTd.innerHTML = '';
        for (const key of RANKINGS[tier]) {
            tierTd.appendChild(buildIcon(key));
        }
    }
    window.setTimeout(
        buildTier,
        1000
    )
}

window.onload = function () {
    buildTier();
}