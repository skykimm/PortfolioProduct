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


function deviceCheck(){
	var filter = "win16|win32|win64|mac";
	
	if(navigator.platform){
		if(0>filter.indexOf(navigator.platform.toLowerCase())){
			//모바일일 경우
			alert('모바일!');
		}else{
			//PC인경우
			alert('pc로만 봐주세요');
			
		}
	}
}
deviceCheck();

function nextSlides(){
	var currentslide = document.querySelector(".showing");

	if(currentslide){
		currentslide.classList.remove("showing");
		var nextslide = currentslide.nextElementSibling;
		if(nextslide){
			nextslide.classList.add("showing");
		}
		else{
			firstSlide.classList.add("showing");
		}
	}
	else{
		firstSlide.classList.add("showing");
	}
};
window.setInterval("nextSlides()",3500);

function prevSlides(){
	var currentslide = document.querySelector(".showing");

	if(currentslide){
		currentslide.classList.remove("showing");
		var prevslide = currentslide.previousElementSibling;
		if(prevslide){
			prevslide.classList.add("showing");
		}
		else{
			lastSlide.classList.add("showing");
		}
	}
	else{
		lastSlide.classList.add("showing");
	}
};
nextSlides();
nextbtn.addEventListener("click",nextSlides);
prevbtn.addEventListener("click",prevSlides);

btn1.addEventListener("mouseover", function ()  {
  mega[0].style.display = "block";
});

btn1.addEventListener("mouseout", function ()  {
 mega[0].style.display = "none";
});

btn2.addEventListener("mouseover", function ()  {
  mega[1].style.display = "block";
});

btn2.addEventListener("mouseout", function ()  {
  mega[1].style.display = "none";
});

btn3.addEventListener("mouseover", function ()  {
  mega[2].style.display = "block";
});

btn3.addEventListener("mouseout", function ()  {
  mega[2].style.display = "none";
});

btn4.addEventListener("mouseover", function ()  {
  mega[3].style.display = "block";
});

btn4.addEventListener("mouseout", function ()  {
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

