// scroll menu

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// toggle menu 

function toggleMenu(){
var menuToggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
menuToggle.classList.toggle('active');
menu.classList.toggle('active');

}

var slide = new Array("images/pâtisserie/macaron-blanc.jpg", "images/pâtisserie/macaron.jpg", "images/pâtisserie/mirtille.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide1").src = slide[numero];
}

var slide2 = new Array("images/pâtisserie/macaron-blanc.jpg", "images/pâtisserie/macaron.jpg", "images/pâtisserie/mirtille.jpg");
var numero2 = 0;

function ChangeSlide2(sens) {
    numero2 = numero2 + sens;
    if (numero2 < 0)
        numero2 = slide2.length - 1;
    if (numero2 > slide2.length - 1)
        numero2 = 0;
    document.getElementById("slide2").src = slide2[numero2];
}