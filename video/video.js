var videoPlayer = document.querySelector(".clickbtn");
var videostop = document.getElementById("videofile");
var toggleBtn = document.querySelector(".togglebtn");
// videoPlayer.play();

function player(){
		videostop.play();
		toggleBtn.style.display="block";
		videoPlayer.style.display="none";
		
}
function stop(){
		videostop.pause();
		toggleBtn.style.display="none";
		videoPlayer.style.display="block";
}
videoPlayer.addEventListener("click",player);
toggleBtn.addEventListener("click",stop);

player();