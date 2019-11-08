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
	var currentslide = document.querySelector(`.${SHOWINGCLASS}`);
	var currentdotted = document.querySelector(`.${DOTTED}`);

	if(currentdotted){
		currentslide.classList.remove(SHOWINGCLASS);
		currentdotted.classList.remove(DOTTED);
	}
	dotted[e].classList.add(DOTTED);
	slide[e].classList.add(SHOWINGCLASS);
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
	var currentslide = document.querySelector(`.${SHOWINGCLASS}`);
	var currentdotted = document.querySelector(`.${DOTTED}`);
	if(currentslide){
		currentslide.classList.remove(SHOWINGCLASS);
		currentdotted.classList.remove(DOTTED);
		var nextslide = currentslide.nextElementSibling;
		var nextdotted = currentdotted.nextElementSibling;
		if(nextslide){
			nextslide.classList.add(SHOWINGCLASS);
			nextdotted.classList.add(DOTTED);
		}
		else{
			firstSlide.classList.add(SHOWINGCLASS);
			firstDotbtn.classList.add(DOTTED);			
		}
	}
	else{
		firstSlide.classList.add(SHOWINGCLASS);
		firstDotbtn.classList.add(DOTTED);
		
	}
};

function prevSlides(){
	var currentslide = document.querySelector(`.${SHOWINGCLASS}`);
	var currentdotted = document.querySelector(`.${DOTTED}`);
	if(currentslide){
		currentslide.classList.remove(SHOWINGCLASS);
		currentdotted.classList.remove(DOTTED);
		var prevslide=currentslide.previousElementSibling;
		var prevdotted = currentdotted.previousElementSibling;
		if(prevslide){
			prevslide.classList.add(SHOWINGCLASS);
			prevdotted.classList.add(DOTTED);
		}
		else{
			lastSlide.classList.add(SHOWINGCLASS);
			lastDotbtn.classList.add(DOTTED);
		}
	}
	else{
		lastSlide.classList.add(SHOWINGCLASS);
		lastDotbtn.classList.add(DOTTED);
	}
};
nextSlides();
nextbtn.addEventListener("click",nextSlides);
prevbtn.addEventListener("click",prevSlides);

function nextSlides2(){
	var currentslide2 = document.querySelector(`.${SHOWINGCLASS2}`);
	if(currentslide2){
		currentslide2.classList.remove(SHOWINGCLASS2);
		var nextslide2 = currentslide2.nextElementSibling;
		if(nextslide2){
			nextslide2.classList.add(SHOWINGCLASS2);
		}
		else{
			firstSlide2.classList.add(SHOWINGCLASS2);			
		}
	}
	else{
		firstSlide2.classList.add(SHOWINGCLASS2);
		
	}
};

function prevSlides2(){
	var currentslide2 = document.querySelector(`.${SHOWINGCLASS2}`);
	if(currentslide2){
		currentslide2.classList.remove(SHOWINGCLASS2);
		var prevslide2=currentslide2.previousElementSibling;
		if(prevslide2){
			prevslide2.classList.add(SHOWINGCLASS2);
		}
		else{
			lastSlide2.classList.add(SHOWINGCLASS2);
		}
	}
	else{
		lastSlide2.classList.add(SHOWINGCLASS2);
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


