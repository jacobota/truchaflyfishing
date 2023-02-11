if(sessionStorage.getItem("enable") == "1") {
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
}