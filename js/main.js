$(document).ready(function(){
				$("#menu").on("click","a", function (event) {
					event.preventDefault();
						var id  = $(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 700);
															});
										});
function scrollToAnchor(aid){
	var aTag = $("[name='"+ aid +"']");
	$('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#scroll").click(function(){
	scrollToAnchor('contact');
});