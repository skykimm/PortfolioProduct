var SHOWINGCLASS = "showing";
var DOTTED = "dotted";
var SHOWINGCLASS2 = "showing2";
var firstSlide2 = document.querySelector(".img2:first-child");
var lastSlide2 = document.querySelector(".img2:last-child");
var firstSlide = document.querySelector(".img:first-child");
var lastSlide = document.querySelector(".img:last-child");
var slide = document.querySelectorAll(".img");
var firstDotbtn = document.querySelector(".dotbtn:first-child");
var lastDotbtn = document.querySelector(".dotbtn:last-child");
var nextbtn = document.querySelector("#nextbtn");
var prevbtn = document.querySelector("#prevbtn");
var headerfix = document.querySelector(".header_fix");
var clickmodal = document.querySelector(".page2_wrapvideo");
var openmodal = document.querySelector("#page2_modal");
var closemodal = document.querySelector("#page2_modalbtn");
var eng = document.querySelector(".eng");
var engbox = document.querySelector(".engbox");
var dotted = document.querySelectorAll(".dotbtn");

function dot(e){
	var currentslide = document.querySelector(".showing");
	var currentdotted = document.querySelector("dotted");

	if(currentdotted){
		currentslide.classList.remove("showing");
		currentdotted.classList.remove("dotted");
	}
	dotted[e].classList.add("dotted");
	slide[e].classList.add("showing");
};



$(function(){
	$(clickmodal).on("click",function(){
		openmodal.style.display="block";
	});
	$(closemodal).on("click",function(){
		openmodal.style.display="none";
	});

	$(".eng").on("click",function(){
		$(".engbox").toggleClass("engboxshowing");
		if($(".engbox").hasClass("engboxshowing")){
			$(eng).find("span").text("한국어 ∧");
		}
		else{
			$(eng).find("span").text("한국어 ∨");
		}
	});

});

function nextSlides(){
	var currentslide = document.querySelector(".showing");
	var currentdotted = document.querySelector(".dotted");
	if(currentslide){
		currentslide.classList.remove("showing");
		currentdotted.classList.remove("dotted");
		var nextslide = currentslide.nextElementSibling;
		var nextdotted = currentdotted.nextElementSibling;
		if(nextslide){
			nextslide.classList.add("showing");
			nextdotted.classList.add("dotted");
		}
		else{
			firstSlide.classList.add("showing");
			firstDotbtn.classList.add("dotted");			
		}
	}
	else{
		firstSlide.classList.add("showing");
		firstDotbtn.classList.add("dotted");
		
	}
};

function prevSlides(){
	var currentslide = document.querySelector(".showing");
	var currentdotted = document.querySelector(".dotted");
	if(currentslide){
		currentslide.classList.remove("showing");
		currentdotted.classList.remove("dotted");
		var prevslide=currentslide.previousElementSibling;
		var prevdotted = currentdotted.previousElementSibling;
		if(prevslide){
			prevslide.classList.add("showing");
			prevdotted.classList.add("dotted");
		}
		else{
			lastSlide.classList.add("showing");
			lastDotbtn.classList.add("dotted");
		}
	}
	else{
		lastSlide.classList.add("showing");
		lastDotbtn.classList.add("dotted");
	}
};
nextSlides();
nextbtn.addEventListener("click",nextSlides);
prevbtn.addEventListener("click",prevSlides);

function nextSlides2(){
	var currentslide2 = document.querySelector(".showing2");
	if(currentslide2){
		currentslide2.classList.remove("showing2");
		var nextslide2 = currentslide2.nextElementSibling;
		if(nextslide2){
			nextslide2.classList.add("showing2");
		}
		else{
			firstSlide2.classList.add("showing2");			
		}
	}
	else{
		firstSlide2.classList.add("showing2");
		
	}
};

function prevSlides2(){
	var currentslide2 = document.querySelector(".showing2");
	if(currentslide2){
		currentslide2.classList.remove("showing2");
		var prevslide2=currentslide2.previousElementSibling;
		if(prevslide2){
			prevslide2.classList.add("showing2");
		}
		else{
			lastSlide2.classList.add("showing2");
		}
	}
	else{
		lastSlide2.classList.add("showing2");
	}
};
nextSlides2();
nextbtn2.addEventListener("click",nextSlides2);
prevbtn2.addEventListener("click",prevSlides2);

function topscroll(){
	if(document.documentElement.scrollTop > 20){
		headerfix.style.display="block";
	}
	else{
		headerfix.style.display="none";
	}
};


window.onscroll = function(){
	topscroll()};


