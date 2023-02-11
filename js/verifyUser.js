var displayer = document.getElementById("displayErr");
var btnsign = document.getElementById("btnsignin");

var Owner = {
    userName : "guy",
    password : "guy"
}

btnsign.addEventListener("click", () => {
    var userInput = document.getElementById("userInput").value;
    var pwInput = document.getElementById("pwInput").value;

    if(userInput == "" && pwInput == "") {
        displayer.innerHTML = "Please input a username and password"
    } else if(userInput == "") {
        displayer.innerHTML = "Please input a username"
    } else if(pwInput == "") {
        displayer.innerHTML = "Please input a password"
    }
    //retrieve username and password and compare
    if(userInput != Owner.userName && pwInput != Owner.password) {
        displayer.innerHTML = "Username and password are incorrect"
    } else if(userInput != Owner.userName) {
        displayer.innerHTML = "Username incorrect"
    } else if(pwInput != Owner.password) {
        displayer.innerHTML = "Password incorrect"
    } else {
        sessionStorage.setItem("enable", "1");
        location.href = "../pages/ownerpage.html";
    }
})

console.log(sessionStorage.getItem("enable"))