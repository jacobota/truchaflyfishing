let isSignedIn = 0;

let userName = "jo";
let pwd = "123";

var displayer = document.getElementById("displayErr");
var btnsign = document.getElementById("btnsignin");
console.log(btnsign);
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
    if(userInput != userName && pwInput != pwd) {
        displayer.innerHTML = "Username and password are incorrect"
    } else if(userInput != userName) {
        displayer.innerHTML = "Username incorrect"
    } else if(pwInput != pwd) {
        displayer.innerHTML = "Password incorrect"
    } else {
        console.log("gothere");
        //allow owner to see edit symbols
        var iTag = document.getElementsByClassName("hideMe");
        for(var i = 0; i < iTag.length; i++) {
            iTag[i].style.display = "block";
        }
        //hide owner signin with owner page if owner is logged in
        var ownersignin = document.getElementById("ownersignin");
        ownersignin.style.display = "none";

        var ownerPage = document.getElementById("ownernav-item");
        ownerPage.style.display = "block";
        location.href = "../pages/ownerpage.html"
    }
})