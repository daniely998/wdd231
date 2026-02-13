const timestamp = document.querySelector("#timestamp");

window.addEventListener("DOMContentLoaded", () => {
    timestamp.value = Date().toLocaleString();
})

// modal
const openModal = document.querySelector("#openModal");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");
const modalContent = document.querySelector("#modal div");

openModal.addEventListener("click", () => {
    modal.showModal();
    modalContent.innerHTML = `Why Join the writer club?
    <p>Meet up with other local writers</p>
    <p>Share experiences and build connections</p>
    <p>Find help publishing your own work</p>
    <p>And more!</p>
    `;
})

closeModal.addEventListener("click", () => {
    modal.close();
})