export default function slider(){
  $('.menu-wrapper').click(function() {
			$('.hamburger-menu').toggleClass('animate');
			$('.menu-content').toggleClass('fixed-menu');
			$(this).parent().parent().parent().toggleClass('fixed');
	})
}