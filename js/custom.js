
$(document).ready(function(){
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  // variableWidth: true,
  // respondTo: 'slider',
  adaptiveHeight: true,
  draggable: false,
  responsive:[
	    {
	        breakpoint: 1200,
	        settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	        }
	    },
		{
			breakpoint: 768,
		    settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: false
	    	}
		}
	]
});
$('.open_icon').on('click', function(){
  	if ($(this).hasClass('change')) {
  		$('.mob_nav').slideUp();
    	$('.open_icon').removeClass('change');
  	} else {
  		$(".mob_nav").slideDown();
    	$(".open_icon").addClass("change");
  	}
  });
new WOW().init();
 });

// $('.slider').slick({
//   slidesToShow: 3,
//   arrows: true,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   variableWidth: true,
//   respondTo: 'slider',
//   adaptiveHeight: true,
//   draggable: false
// });






















