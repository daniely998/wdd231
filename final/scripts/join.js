const timestamp = document.querySelector("#timestamp");

window.addEventListener("DOMContentLoaded", () => {
    timestamp.value = Date().toLocaleString();
})