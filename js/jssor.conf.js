jQuery(document).ready(function ($) {
	var options = {
		$AutoPlay: true,
		$AutoPlaySteps: 1,
		$AutoPlayInterval: 2000,
		$PauseOnHover: 3,
		$ArrowKeyNavigation: true,
		$SlideEasing: $JssorEasing$.$EaseOutQuint,
		$SlideDuration: 800,
		$MinDragOffsetToSlide: 20,
		$SlideSpacing: 0,
		$DisplayPieces: 1,
		$ParkingPosition: 0,
		$UISearchMode: 1,
		$PlayOrientation: 1,
		$DragOrientation: 1,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$ChanceToShow: 1,
			$AutoCenter: 2,
			$Steps: 1,
			$Scale: false
		},

		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$ChanceToShow: 2,
			$AutoCenter: 1,
			$Steps: 1,
			$Lanes: 1,
			$SpacingX: 12,
			$SpacingY: 4,
			$Orientation: 1,
			$Scale: false
		}
	};
	
	$("#slider1_container").css("display", "block");
	var jssor_slider1 = new $JssorSlider$("slider1_container", options);

	function ScaleSlider() {
		var bodyWidth = document.body.clientWidth;
		if (bodyWidth) {
			jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
		}
		else
			window.setTimeout(ScaleSlider, 30);
	}
	
	ScaleSlider();

	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
});