
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


$(function(){
	$(".x").on("click",function(){
		$("#container").slideUp(500,"linear",function(){
			$("#container").hide();
		});
	});

	$(".header_right a").on("click",function(){
		$(".header_right_box").slideToggle();
	});
});
	
