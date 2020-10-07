"use strict";

var Shuffle = window.Shuffle;

class Demo {
	constructor(element) {
		this.element = element;
		this.shuffle = new Shuffle(element, {
			itemSelector: '.picture-item',
			sizer: element.querySelector('.my-sizer-element'),
		});

		// Log events.
		// this.addShuffleEventListeners();
		this._activeFilters = [];
		this.addFilterButtons();
	}
	// addShuffleEventListeners() {
	// 	this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
	// 		console.log('layout. data:', data);
	// 	});
	// 	this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
	// 		console.log('removed. data:', data);
	// 	});
	// }

	addFilterButtons() {
		const options = document.querySelector('.filter__btn');
		if (!options) {
			return;
		}

		const filterButtons = Array.from(options.children);
		const onClick = this._handleFilterClick.bind(this);
		filterButtons.forEach((button) => {
			button.addEventListener('click', onClick, false);
		});
	}

	_handleFilterClick(evt) {
		const btn = evt.currentTarget;
		const isActive = btn.classList.contains('active');
		const btnGroup = btn.getAttribute('data-group');

		this._removeActiveClassFromChildren(btn.parentNode);

		let filterGroup;
		if (isActive) {
			btn.classList.remove('active');
			filterGroup = Shuffle.ALL_ITEMS;
		} else {
			btn.classList.add('active');
			filterGroup = btnGroup;
		}

		this.shuffle.filter(filterGroup);
	}

	_removeActiveClassFromChildren(parent) {
		const {
			children
		} = parent;
		for (let i = children.length - 1; i >= 0; i--) {
			children[i].classList.remove('active');
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
  window.demo = new Demo(document.getElementById('grid'));
});


(function($) {
    ///////////////////////////
	// Btn nav collapse
	$('#nav .navbar__collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// sliders
    $('#gallery-slider').slick({
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
		autoplaySpeed: 2300,
		infinite: false,
        speed: 1000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }]
    });
	$('#reviews').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="arrow arrow-prev"><svg viewBox="0 0 18 10" id="icon_arrow" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 1.01c0-.24-.08-.48-.23-.67-.33-.41-.9-.45-1.27-.08L8.99 7.68 1.49.26C1.12-.11.55-.07.22.34c-.33.42-.3 1.05.07 1.42L8.4 9.77c.34.34.85.34 1.19 0l8.1-8.01c.2-.2.31-.48.31-.75z"></path></svg></button>',
		nextArrow: '<button type="button" class="arrow arrow-next"><svg viewBox="0 0 18 10" id="icon_arrow" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 1.01c0-.24-.08-.48-.23-.67-.33-.41-.9-.45-1.27-.08L8.99 7.68 1.49.26C1.12-.11.55-.07.22.34c-.33.42-.3 1.05.07 1.42L8.4 9.77c.34.34.85.34 1.19 0l8.1-8.01c.2-.2.31-.48.31-.75z"></path></svg></button>',
		dots: true,
		dotsClass: 'dots',
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3
				},
			},{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				},
			},{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				},
			}
		]
	});

})(jQuery);