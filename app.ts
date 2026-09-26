let dialogShop = document.getElementById("shopDialog") as HTMLDialogElement;
let btnShop = document.getElementById("shopBtn") as HTMLElement;
let btnCloseShop = document.getElementById("closeShopBtn") as HTMLElement;

btnShop.addEventListener("click", () => {
    dialogShop.showModal();
});

btnCloseShop.addEventListener("click", () => {
    dialogShop.close();
});
