var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var mega = document.getElementsByClassName("header_mega");
var showtab = document.querySelectorAll(".choicecontainer");
var clicktab = document.querySelectorAll(".clickbtn");
var headerFix = document.querySelector("header");


function isMobile(){
	var UserAgent = navigator.userAgent;
	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
	{
		return true;
	}else{
		return false;
	}
}
if(isMobile()){
	alert("mobile 버전은 제공되지 않습니다.");
}
isMobile();

function tabshowing(n){
  var currentbtn = document.querySelector(".clickbtns");
  var currenttab = document.querySelector(".choice_boxcheck");

  if(currentbtn){
    currentbtn.classList.remove("clickbtns");
    currenttab.classList.remove("choice_boxcheck");
  }

  showtab[n].classList.add("choice_boxcheck");
  clicktab[n].classList.add("clickbtns");
}


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


function headerScroll(){
  if(document.documentElement.scrollTop > 20){
    headerFix.classList.add("headerfix");
  }
  else{
    headerFix.classList.remove("headerfix");
  }
};

window.onscroll = function(){headerScroll()};