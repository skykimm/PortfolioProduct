var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var mega = document.getElementsByClassName("header_mega");
var showtab = document.querySelectorAll(".login_box2");
var clicktab = document.querySelectorAll(".clickbtn");
var headerFix = document.querySelector("header");


function loginbtn(n){
  var currentbtn = document.querySelector(".clickbtns");
  var currenttab = document.querySelector(".login_check");

  if(currentbtn){
    currentbtn.classList.remove("clickbtns");
    currenttab.classList.remove("login_check");
  }

  showtab[n].classList.add("login_check");
  clicktab[n].classList.add("clickbtns");
};


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

btn5.addEventListener("mouseover", () => {
  mega[4].style.display = "block";
});

btn5.addEventListener("mouseout", () => {
  mega[4].style.display = "none";
});

btn6.addEventListener("mouseover", () => {
  mega[5].style.display = "block";
});

btn6.addEventListener("mouseout", () => {
  mega[5].style.display = "none";
});

btn7.addEventListener("mouseover", () => {
  mega[6].style.display = "block";
});

btn7.addEventListener("mouseout", () => {
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