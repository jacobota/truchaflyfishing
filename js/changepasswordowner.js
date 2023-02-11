if(sessionStorage.getItem("enable") == "1") {
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
}else {
    location.href = "../pages/ownersignin.html";
}

var changepw = document.getElementById("changepw");
var display = document.querySelector(".display");

changepw.addEventListener("click", () => {
    console.log("click")
    var pw1 = document.querySelector(".pw1");
    var pw2 = document.querySelector(".pw2");
    if(pw1.value == '' || pw2.value == '') {
        display.innerHTML = "Please enter a password"
    }
    else if(pw1.value == pw2.value) {
        location.href = 'ownerpage.html'
    }
})