// 변수지정

var SHOWINGCLASS = "showing";
var firstslide = document.querySelector(".slide_item:first-child");
var lastslide = document.querySelector(".slide_item:last-child");
var nextbtn = document.querySelector("#next_btn");
var prevbtn = document.querySelector("#prev_btn");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var mega = document.getElementsByClassName("header_mega");
var headerFix = document.querySelector("header");
// var headerfix = "headerfix";



// 함수선언



function next_slider(){
	var currnetslide = document.querySelector(`.${SHOWINGCLASS}`);

	if(currnetslide){
		currnetslide.classList.remove(SHOWINGCLASS);
		var nextslide = currnetslide.nextElementSibling;
		if(nextslide){
			nextslide.classList.add(SHOWINGCLASS);
		}
		else{
			firstslide.classList.add(SHOWINGCLASS);
		}
	}
	else{
		firstslide.classList.add(SHOWINGCLASS);
	}

	window.setInterval("next_slider()",4000);

};

function prev_slider(){
	var currnetslide = document.querySelector(`.${SHOWINGCLASS}`);

	if(currnetslide){
		currnetslide.classList.remove(SHOWINGCLASS);
		var prevslide = currnetslide.previousElementSibling;
		if(prevslide){
			prevslide.classList.add(SHOWINGCLASS);
		}
		else{
			lastslide.classList.add(SHOWINGCLASS);
		}
	}
	else{
		lastslide.classList.add(SHOWINGCLASS);
	}
}
next_slider();
nextbtn.addEventListener("click",next_slider);
prevbtn.addEventListener("click",prev_slider);

btn1.addEventListener("mouseover", function () {
  mega[0].style.display = "block";
});

btn1.addEventListener("mouseout", function () {
 mega[0].style.display = "none";
});

btn2.addEventListener("mouseover", function () {
  mega[1].style.display = "block";
});

btn2.addEventListener("mouseout", function () {
  mega[1].style.display = "none";
});

btn3.addEventListener("mouseover", function () {
  mega[2].style.display = "block";
});

btn3.addEventListener("mouseout", function () {
  mega[2].style.display = "none";
});

btn4.addEventListener("mouseover", function () {
  mega[3].style.display = "block";
});

btn4.addEventListener("mouseout", function () {
  mega[3].style.display = "none";
});

btn5.addEventListener("mouseover", function () {
  mega[4].style.display = "block";
});

btn5.addEventListener("mouseout", function () {
  mega[4].style.display = "none";
});

btn6.addEventListener("mouseover", function () {
  mega[5].style.display = "block";
});

btn6.addEventListener("mouseout", function () {
  mega[5].style.display = "none";
});

btn7.addEventListener("mouseover", function () {
  mega[6].style.display = "block";
});

btn7.addEventListener("mouseout", function () {
  mega[6].style.display = "none";
});

// btn1.addEventListener("mouseover", () => {
//   mega[0].style.display = "block";
// });

// btn1.addEventListener("mouseout", () => {
//  mega[0].style.display = "none";
// });

// btn2.addEventListener("mouseover", () => {
//   mega[1].style.display = "block";
// });

// btn2.addEventListener("mouseout", () => {
//   mega[1].style.display = "none";
// });

// btn3.addEventListener("mouseover", () => {
//   mega[2].style.display = "block";
// });

// btn3.addEventListener("mouseout", () => {
//   mega[2].style.display = "none";
// });

// btn4.addEventListener("mouseover", () => {
//   mega[3].style.display = "block";
// });

// btn4.addEventListener("mouseout", () => {
//   mega[3].style.display = "none";
// });

// btn5.addEventListener("mouseover", () => {
//   mega[4].style.display = "block";
// });

// btn5.addEventListener("mouseout", () => {
//   mega[4].style.display = "none";
// });

// btn6.addEventListener("mouseover", () => {
//   mega[5].style.display = "block";
// });

// btn6.addEventListener("mouseout", () => {
//   mega[5].style.display = "none";
// });

// btn7.addEventListener("mouseover", () => {
//   mega[6].style.display = "block";
// });

// btn7.addEventListener("mouseout", () => {
//   mega[6].style.display = "none";
// });


function headerScroll(){
	if(document.documentElement.scrollTop > 20){
		headerFix.classList.add("headerfix");
	}
	else{
		headerFix.classList.remove("headerfix");
	}
};

window.onscroll = function(){headerScroll()};

