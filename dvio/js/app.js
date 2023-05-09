
//HAMBURGER MENU
const hamburger = document.querySelector(".un-hamburger-menu");
const navBar = document.querySelector(".un-navbar");
//const line = document.querySelector(".line")
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const sliderContainer = document.querySelector(".slider-container");


hamburger.addEventListener('click', ()=>{
	navBar.classList.toggle("activo");
	line1.classList.toggle("equis");
	line2.classList.toggle("equis");
	line3.classList.toggle("equis");
	hamburger.classList.toggle("equis");
	sliderContainer.classList.toggle("slider-container-hide");
});


//MAIN SLIDER
const sliderInner = document.querySelector(".slider-inner");
const images = document.querySelectorAll(".slider-image");
let index = 1;

setInterval(function(){
	let p = index * -100;
	sliderInner.style.transform = "translateX("+ p +"%)";
	index++;
	if(index > images.length - 1){
		index = 0;
	}
},4000);

//SEARCHBAR
const searchbarInput = document.querySelector(".search-bar input");
