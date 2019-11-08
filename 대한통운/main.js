


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
	
