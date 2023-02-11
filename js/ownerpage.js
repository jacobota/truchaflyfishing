if(sessionStorage.getItem("enable") == "1") {
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
}
else {
    location.href = "../pages/ownersignin.html";
}

var logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    sessionStorage.setItem("enable", "0");
    location.href = "../index.html";
})

console.log(sessionStorage.getItem("enable"))