$(document).ready(function(){
	$(".navbar-static-top").sticky({topSpacing:0});
	$('.show-list').click(function () {
		$('.course-list').toggleClass('active');
		$(this).cssToggle('color', '#eee');
	});

	$('body').scrollspy({ target: '.course-list' })
});