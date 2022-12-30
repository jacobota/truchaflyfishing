var displayer = document.getElementById("displayErr");
var btnsign = document.getElementById("btnsignin");

localStorage.setItem('enabled', '0');
localStorage.setItem('username', 'jo');

if(localStorage.getItem('changepw') == null || localStorage.getItem('changedpw') == 'false') {
    localStorage.setItem('changepw', 'false')
}

btnsign.addEventListener("click", () => {
    if(localStorage.getItem('changepw') == 'false') {
        console.log("here")
        localStorage.setItem('password', '123')
    }

    var userInput = document.getElementById("userInput").value;
    var pwInput = document.getElementById("pwInput").value;

    if(userInput == "" && pwInput == "") {
        displayer.innerHTML = "Please input a username and password"
    } else if(userInput == "") {
        displayer.innerHTML = "Please input a username"
    } else if(pwInput == "") {
        displayer.innerHTML = "Please input a password"
    }
    if(userInput != localStorage.getItem('username') && pwInput != localStorage.getItem('password')) {
        displayer.innerHTML = "Username and password are incorrect"
    } else if(userInput != localStorage.getItem('username')) {
        displayer.innerHTML = "Username incorrect"
    } else if(pwInput != localStorage.getItem('password')) {
        displayer.innerHTML = "Password incorrect"
    } else {
        localStorage.setItem("enabled", "1");
        location.href = "../pages/ownerpage.html";
    }
})