var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.bx-chevron-right',
	  prevEl: '.bx-chevron-left'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	} 
    });