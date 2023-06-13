const slides = [
    '../images/Pic1.png',
    '../images/Pic2.jpg',
    '../images/Pic4.jpg',
    '../images/Pic5.jpg',
    '../images/Pic6.jpg',
    '../images/Pic7.jpeg',
    '../images/Pic8.jpeg',
    '../images/Pic9.jpg',
    '../images/Pic10.jpeg',
    '../images/Pic11.jpg',
    '../images/Pic12.jpg',
    '../images/Pic13.jpg',
    '../images/Pic14.jpeg',
    '../images/Pic15.jpeg',
    '../images/Pic16.jpeg'
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


