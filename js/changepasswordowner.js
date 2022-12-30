var isEnabled = localStorage.getItem("enabled");

if(isEnabled == '1') {
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
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
        localStorage.setItem('changepw', 'true');
        localStorage.setItem('password', pw1.value);
        location.href = 'ownerpage.html'
    }
})