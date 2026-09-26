"use strict";
let btnCloseShop = document.getElementById("closeShopBtn");
let btnCloseWarning = document.getElementById("closeWarningBtn");
let btnMoonCake = document.getElementById("moonCakeBtn");
let btnShop = document.getElementById("shopBtn");
let btnUpgrade = document.getElementById("upgradeBtn");
let dialogWarning = document.getElementById("warningDialog");
let dialogShop = document.getElementById("shopDialog");
let textMoonCoin = document.getElementById("moonCoinText");
let textTotal = document.getElementById("totalText");
let textWarning = document.getElementById("warningText");
let textCoinsSpent = document.getElementById("coinsSpentText");
let textMoonCoinShop = document.getElementById("moonCoinShopText");
let textMarkiplierPrice = document.getElementById("markiplierPriceText");
let textMarkiplierRatio = document.getElementById("markiplierRatioText");
let textMarkiplierLevel = document.getElementById("markiplierLevelText");
let coin = 0;
let markiplier = 1;
let markiplierLevel = 1;
let coinSpent = 0;
function updateText() {
    textMarkiplierLevel.innerText = "Level: " + (markiplierLevel - 1);
    textMarkiplierPrice.innerText = "Price: " + 25 * markiplier;
    textMarkiplierRatio.innerText = "Multiplier: " + markiplier;
    textMoonCoin.innerText = "MoonCoins: " + coin;
    textMoonCoinShop.innerText = "MoonCoins: " + coin;
    textCoinsSpent.innerText = "MoonCoins Spent in MoonShop: " + coinSpent;
    textTotal.innerText = "Total Clicks: " + (coin + coinSpent);
}
function warningDialogUpdate(enough) {
    if (enough) {
        textWarning.innerText =
            "Upgraded multiplier to level " + (markiplierLevel - 1);
    }
    else {
        textWarning.innerText =
            "Not enough, need " + (markiplier * 25 - coin) + " more MoonCoins!";
    }
}
btnShop.addEventListener("click", () => {
    dialogShop.showModal();
});
btnCloseShop.addEventListener("click", () => {
    dialogShop.close();
});
btnUpgrade.addEventListener("click", () => {
    if (coin >= 25 * markiplier) {
        coin -= 25 * markiplier;
        coinSpent += 25 * markiplier;
        markiplierLevel++;
        markiplier *= 2;
        updateText();
        warningDialogUpdate(true);
    }
    else {
        updateText();
        warningDialogUpdate(false);
    }
    dialogWarning.showModal();
});
btnCloseWarning.addEventListener("click", () => {
    dialogWarning.close();
});
btnMoonCake.addEventListener("click", () => {
    coin += markiplier;
    updateText();
});
