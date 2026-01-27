const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxTex = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxTex.innerHTML = `One Apples contains 95 calories`;
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxTex.innerHTML = `C`;
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxTex.innerHTML = `D`;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});