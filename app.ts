let btnCloseShop = document.getElementById("closeShopBtn") as HTMLElement;
let btnCloseWarning = document.getElementById("closeWarningBtn") as HTMLElement;
let btnMoonCake = document.getElementById("moonCakeBtn") as HTMLElement;
let btnShop = document.getElementById("shopBtn") as HTMLElement;
let btnUpgrade = document.getElementById("upgradeBtn") as HTMLElement;
let dialogWarning = document.getElementById(
    "warningDialog",
) as HTMLDialogElement;
let dialogShop = document.getElementById("shopDialog") as HTMLDialogElement;
let textMoonCoin = document.getElementById("moonCoinText") as HTMLElement;
let textTotal = document.getElementById("totalText") as HTMLElement;
let textWarning = document.getElementById("warningText") as HTMLElement;
let textCoinsSpent = document.getElementById("coinsSpentText") as HTMLElement;
let textMoonCoinShop = document.getElementById(
    "moonCoinShopText",
) as HTMLElement;
let textMarkiplierPrice = document.getElementById(
    "markiplierPriceText",
) as HTMLElement;
let textMarkiplierRatio = document.getElementById(
    "markiplierRatioText",
) as HTMLElement;
let textMarkiplierLevel = document.getElementById(
    "markiplierLevelText",
) as HTMLElement;
let coin: number = 0;
let markiplier: number = 1;
let markiplierLevel: number = 1;
let coinSpent: number = 0;

function updateText() {
    textMarkiplierLevel.innerText = "Level: " + (markiplierLevel - 1);
    textMarkiplierPrice.innerText = "Price: " + 25 * markiplier;
    textMarkiplierRatio.innerText = "Multiplier: " + markiplier;
    textMoonCoin.innerText = "MoonCoins: " + coin;
    textMoonCoinShop.innerText = "MoonCoins: " + coin;
    textCoinsSpent.innerText = "MoonCoins Spent in MoonShop: " + coinSpent;
    textTotal.innerText = "Total Clicks: " + (coin + coinSpent);
}

function warningDialogUpdate(enough: boolean) {
    if (enough) {
        textWarning.innerText =
            "Upgraded multiplier to level " + (markiplierLevel - 1);
    } else {
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
    } else {
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
