const slides = [
    './images/Pic1.png',
    './images/Pic2.jpg',
    './images/Pic4.jpg',
    './images/Pic5.jpg',
    './images/Pic6.jpg'
]

let slideholder = document.getElementById("slideshowimage");

let counter = 0;
slideShow(); 

function slideShow() {
    slideholder.style.backgroundImage = "url(" + slides[counter] + ")";
    counter++;
    if(counter == slides.length) {
        counter = 0;
    }
    setTimeout(slideShow, 5000); //change every five seconds
}


