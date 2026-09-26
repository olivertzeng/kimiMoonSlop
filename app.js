"use strict";
let dialogShop = document.getElementById("shopDialog");
let btnShop = document.getElementById("shopBtn");
let btnCloseShop = document.getElementById("closeShopBtn");
btnShop.addEventListener("click", () => {
    dialogShop.showModal();
});
btnCloseShop.addEventListener("click", () => {
    dialogShop.close();
});
