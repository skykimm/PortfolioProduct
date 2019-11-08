var SHOWINGCLASS = "showing";
var firstSlide = document.querySelector(".slider_item:first-child");
var lastSlide = document.querySelector(".slider_item:last-child");
var nextbtn = document.querySelector(".next");
var prevbtn = document.querySelector(".prev");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var mega = document.getElementsByClassName("drop");

function nextSlides(){
	var currentslide = document.querySelector(`.${SHOWINGCLASS}`);

	if(currentslide){
		currentslide.classList.remove(SHOWINGCLASS);
		var nextslide = currentslide.nextElementSibling;
		if(nextslide){
			nextslide.classList.add(SHOWINGCLASS);
		}
		else{
			firstSlide.classList.add(SHOWINGCLASS);
		}
	}
	else{
		firstSlide.classList.add(SHOWINGCLASS);
	}
};
setInterval(nextSlides,3500);

function prevSlides(){
	var currentslide = document.querySelector(`.${SHOWINGCLASS}`);

	if(currentslide){
		currentslide.classList.remove(SHOWINGCLASS);
		var prevslide = currentslide.previousElementSibling;
		if(prevslide){
			prevslide.classList.add(SHOWINGCLASS);
		}
		else{
			lastSlide.classList.add(SHOWINGCLASS);
		}
	}
	else{
		lastSlide.classList.add(SHOWINGCLASS);
	}
};
nextSlides();
nextbtn.addEventListener("click",nextSlides);
prevbtn.addEventListener("click",prevSlides);

btn1.addEventListener("mouseover", () => {
  mega[0].style.display = "block";
});

btn1.addEventListener("mouseout", () => {
 mega[0].style.display = "none";
});

btn2.addEventListener("mouseover", () => {
  mega[1].style.display = "block";
});

btn2.addEventListener("mouseout", () => {
  mega[1].style.display = "none";
});

btn3.addEventListener("mouseover", () => {
  mega[2].style.display = "block";
});

btn3.addEventListener("mouseout", () => {
  mega[2].style.display = "none";
});

btn4.addEventListener("mouseover", () => {
  mega[3].style.display = "block";
});

btn4.addEventListener("mouseout", () => {
  mega[3].style.display = "none";
});


function scrollFunction(){
	if(document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").style.background = "white";
	}

	else {
		document.getElementById("navbar").style.background = "none";		
	}
	};

$(function(){
	$("#navbar").on("mouseover",function(){
		$("#navbar").css({"background":"white"});
	});
	$("#navbar").on("mouseout",function(){
		$("#navbar").css({"background":"none"});
	});
});

function scrolltop(){
	if(document.documentElement.scrollTop>=20){
		document.getElementById("fix").style.top="80%";
	}
	else{
		document.getElementById("fix").style.top="100%";
	}
}

scrolltop();
window.onscroll = function(){scrolltop(),scrollFunction()};