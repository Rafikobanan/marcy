$(document).ready(function () {
	function ibg() {

		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}

	ibg();

	$('.header__hamburger').click(function () {
		$('.header-nav').toggle(300);
	});

	$('.video__btn').click(function () {
		let video = document.querySelector('.video__video');
		video.play();

		$(this).hide();

		$(video).attr('controls', 'controls');
	})
});