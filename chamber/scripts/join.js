const timestamp = document.querySelector("#timestamp");

window.addEventListener("DOMContentLoaded", () => {
    timestamp.value = Date().toString();
})

const npOpen = document.querySelector("#np-op");
const bronzeOpen = document.querySelector("#bronze-op");
const silverOpen = document.querySelector("#silver-op");
const goldOpen = document.querySelector("#gold-op");
const modalBox = document.querySelector("#join-modal");
const closeModal = document.querySelector("#closeModal");
const modalBoxContent = document.querySelector("#join-modal div");

npOpen.addEventListener("click", () => {
    modalBox.showModal();
    modalBoxContent.innerHTML = `Non Profit Membership Level Benefits
    <p>Seasonal Gathering Invitation</p>
    <p>Connections and marketing</p>
    `;
})

bronzeOpen.addEventListener("click", () => {
    modalBox.showModal();
    modalBoxContent.innerHTML = `Bronze Membership Level Benefits
    <p>All non profit membership benefits</p>
    <p>Monthly dinner invitation</p>
    <p>Social media advertisements</p>
    `;
})

silverOpen.addEventListener("click", () => {
    modalBox.showModal();
    modalBoxContent.innerHTML = `Silver Membership Level Benefits
    <p>All Bronze membership benefits</p>
    <p>Numerous discounts on venues and equipments</p>
    <p>Professional advisors</p>
    `;
})

goldOpen.addEventListener("click", () => {
    modalBox.showModal();
    modalBoxContent.innerHTML = `Gold Membership Level Benefits
    <p>All Silver membership benefits</p>
    <p>Headline advertsing</p>
    <p>Yearly special gathering invitation</p>
    `;
})

closeModal.addEventListener("click", () => {
    modalBox.close();
})