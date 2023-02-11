//hold all the editable interfaces so they can be used
var editFirstHead = document.getElementsByName("editFirstHead");
var editFirstBody = document.getElementsByName("editFirstBody");
//hold all the ousiders view so they can be edited together
var firstHead = document.getElementsByName("firstHead");
var firstBody = document.getElementsByName("firstBody");
//get all the editors
var firstHeadEditor = document.getElementsByName("firstHeadEditor");
var firstBodyEditor = document.getElementsByName("firstBodyEditor");

if(sessionStorage.getItem("enable") == "1") {
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
    //show the editable interface
    editFirstHead[0].style.display = "block"
    editFirstBody[0].style.display = "block"
    //hide all the outsiders view   
    //firstHead[0].style.display = "none"
    firstBody[0].style.display = "none"
}

firstHeadEditor[0].addEventListener("keydown", () => {
    firstHead[0].innerHTML = firstHeadEditor[0].value;
})