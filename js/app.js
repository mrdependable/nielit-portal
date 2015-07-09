$(document).ready(function(){
	$(".navbar-static-top").sticky({topSpacing:0});
	$('.show-list').click(function () {
		$('.course-list').toggleClass('active');
		$(this).cssToggle('color', '#eee');
	});

	$('.course-list li a').click(function() {
		$('.course-list li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
});