// 변수지정

var SHOWINGCLASS = "showing";
var firstslide = document.querySelector(".slide_item:first-child");
var lastslide = document.querySelector(".slide_item:last-child");
var nextbtn = document.querySelector("#next_btn");
var prevbtn = document.querySelector("#prev_btn");


// 함수선언



function next_slider(){
	var currnetslide = document.querySelector(".showing");

	if(currnetslide){
		currnetslide.classList.remove("showing");
		var nextslide = currnetslide.nextElementSibling;
		if(nextslide){
			nextslide.classList.add("showing");
		}
		else{
			firstslide.classList.add("showing");
		}
	}
	else{
		firstslide.classList.add("showing");
	}

	// window.setInterval("next_slider()",4000);

};

function prev_slider(){
	var currnetslide = document.querySelector(".showing");

	if(currnetslide){
		currnetslide.classList.remove("showing");
		var prevslide = currnetslide.previousElementSibling;
		if(prevslide){
			prevslide.classList.add("showing");
		}
		else{
			lastslide.classList.add("showing");
		}
	}
	else{
		lastslide.classList.add("showing");
	}
}
next_slider();
nextbtn.addEventListener("click",next_slider);
prevbtn.addEventListener("click",prev_slider);

