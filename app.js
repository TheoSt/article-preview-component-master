let shareBtn = document.querySelector("#shareBtn");
let sharePopup = document.querySelector("body>div");


shareBtn.addEventListener("click",function() {
    sharePopup.classList.toggle("active");
});