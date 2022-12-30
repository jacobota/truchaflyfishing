var isEnabled = localStorage.getItem("enabled");

if(isEnabled == '1') {
    //unveil all pen markers
    // var iTag = document.getElementsByClassName("hideMe");
    // for(let i = 0; i < iTag.length; i++) {
    //     iTag[i].style.display = "block";
    // }
    //show owner page instead of signin
    var ownersignin = document.getElementById("ownersignin");
    ownersignin.style.display = "none"
    var ownerPage = document.getElementById("ownernav-item");
    ownerPage.style.display = "block"
}