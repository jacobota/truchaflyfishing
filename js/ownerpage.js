var isEnabled = localStorage.getItem("enabled");

if(isEnabled == '1') {
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
}

var logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    localStorage.setItem("enabled", "0");
    location.href = "../index.html";
})