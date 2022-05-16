const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 800,
  
    navigation: {
      nextEl: '.slider-btn__next',
      prevEl: '.slider-btn__prev',
    },
  
});



// $(document).ready(function() {
// 	$('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
// 	});
// });