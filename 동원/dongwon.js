// 변수지정
var SHOWING = "openmodal";
var modalbtn = document.getElementById("modalbtn");
var modaloverlay = document.querySelector(".modaloverlay");
var modalbtntwo = document.getElementById("modalbtn_two");
var modaloverlaytwo = document.querySelector(".modaloverlay_2");
var closebtn = document.getElementById("close_icon");
var openbtn = document.getElementById("open_icon");
var iconA = document.querySelector(".iconbox");
var iconContainer = document.querySelector(".icon");
var bottomfix = document.getElementById("bottomfix");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var mega = document.getElementsByClassName("header_div");
var video = document.getElementById("video");
// bottom 고정픽스

function bottomscroll(){
	if(document.documentElement.scrollTop <5000){
		bottomfix.style.display="none";
	}
	else{
		bottomfix.style.display="block";
	}
}

// top 고정픽스

function topfixbar(){
	var a =	document.documentElement.scrollTop;

	var b = document.documentElement.scrollHeight-
	document.documentElement.clientHeight;

	var c = (a/b)*100;

	document.getElementById("bar").style.width=c+"%";
}

// right 고정픽스
function scrollicon(){
	if(document.documentElement.scrollTop > 200){
		iconContainer.style.display="block";
	}
	else{
		iconContainer.style.display="none";
	}

	if(document.documentElement.scrollTop > 5000){
		iconContainer.style.display="none";
	}

}
function iconBox(){
	iconA.style.display="none";
	closebtn.style.display="none";
	openbtn.style.display="block";
}
closebtn.addEventListener("click",iconBox);

function iconBox2(){
	iconA.style.display="block";
	closebtn.style.display="block";
	openbtn.style.display="none";
}
openbtn.addEventListener("click",iconBox2);


function modal(){
	modaloverlay.classList.toggle(SHOWING);
	if(modaloverlay.classList.contains(SHOWING)){
		modalbtn.innerHTML=`<i class="fas fa-times"></i>`
	}
	else{
		modalbtn.innerHTML=`<i class="fas fa-search"></i>`
	}
	
}
modalbtn.addEventListener("click",modal);


function modal2(){
	modaloverlaytwo.classList.toggle(SHOWING);
	if(modaloverlaytwo.classList.contains(SHOWING)){
		modalbtntwo.innerHTML=`<i class="fas fa-times"></i>`
	}
	else{
		modalbtntwo.innerHTML=`<i class="fas fa-bars"></i>`
	}

}
modalbtntwo.addEventListener("click",modal2);

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

function videoa(){
	video.classList.add("video_ani");
	if(video.className=="video_ani"){
		video.style.height="800px";
	}
}


// 함수실행

scrollicon();
bottomscroll();
window.onscroll = function(){
	scrollicon(),topfixbar(),bottomscroll()};

window.onload= function(){
	setTimeout(videoa,2000);
}