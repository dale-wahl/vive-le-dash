jQuery.fn.exists = function( callback ) {
	
	var args = [].slice.call( arguments, 1 );
	if ( this.length ) {
		callback.call( this, args );
	}
	return this;

};

( function($) {

	var khmerScript = {
		
		initAll: function() {
			this.menuShowHide();
			this.searchOpen();
			this.tabWidget();
		},

		tabWidget: function() {
			$('#tabwrap ul.tabs li a').on('click', function(e) {
				e.preventDefault();

				if( ! $(this).hasClass('recent-post-title') ) {
					
					$('.recent-post-title.current-tap').removeClass('current-tap');
					$('.popular-post-title').addClass('current-tap');
					
					$('#recent-posts').removeClass('current-data');
					$('#popular-posts').addClass('current-data');

				} else {
					
					$('.popular-post-title.current-tap').removeClass('current-tap');
					$('.recent-post-title').addClass('current-tap');
					
					$('#popular-posts').removeClass('current-data');
					$('#recent-posts').addClass('current-data');

				}

			});
		},

		menuShowHide: function() {

			var $primary_menu = $('#primary-site-navigation');
			var $secondary_menu = $('#secondary-site-navigation');

			var $first_menu = '';
			var $second_menu = '';

			if ( $primary_menu.length == 0 && $secondary_menu.length == 0 ) {
				
				return;

			} else {

				if ( $primary_menu.length ) {
					
					$first_menu = $primary_menu;

				}
			}

			var menu_wrapper = $first_menu.clone().appendTo('#smobile-menu');
			
			if ( $secondary_menu.length ) {

				var $second_menu = $secondary_menu.find('ul.smenu').clone().appendTo('#smobile-menu .menu-main-menu-container');

			}
			
			$('.super-menu-nav, .icon-toggle, .inner-label, #primary-pull').click(function(e) {
				e.preventDefault();
				e.stopPropagation();
				
				if ( ! $('body').hasClass('mobile-menu-active') ) {
					
					$('#smobile-menu').show().addClass('show');
					$('body').toggleClass('mobile-menu-active');

				} else {

					khmerScript.callFunctionHideMenu();

				}
				
			});

			$('<span class="sub-arrow"><i class="fa fa-angle-down"></i></span>').insertAfter($('.menu-item-has-children > a'));

			$('.menu-item-has-children .sub-arrow').click(function(e) {
				e.preventDefault();
				e.stopPropagation();

				var subMenuOpen = $(this).hasClass('sub-menu-open');
				
				if ( subMenuOpen ) {
					
					$(this).removeClass('sub-menu-open');
					$(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
					$(this).next('ul.sub-menu, ul.children').removeClass('active').slideUp();
				
				} else {
					
					$(this).addClass('sub-menu-open');
					$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
					$(this).next('ul.sub-menu, ul.children').addClass('active').slideDown();

				}

			});

			if( $('#wpadminbar').length ) {
				$('#smobile-menu').addClass('wpadminbar-active');
			}

		},

		searchOpen: function() {
			
			$('.btn-search').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('.search-style-one').addClass('open');
				$('.overlay').find('input').focus();
			});

			$('.overlay-close').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('.search-style-one').removeClass('open');
			});

			$(document).on('click', function(e) {
				$('.search-style-one').removeClass('open');
			});

			$('.search-style-one').click(function(e) {
				e.preventDefault();
				e.stopPropagation();
			});

		},

		callFunctionHideMenu: function() {
		
			$('#smobile-menu').removeClass('show');
			jQuery('body').removeClass('mobile-menu-active');
			jQuery('html').removeClass('noscroll');
			jQuery('#mobile-menu-overlay').fadeOut();

		}

	};


	$( document ).ready(function(e) {

		khmerScript.initAll();

	}).on('click', function( event ) {

		khmerScript.callFunctionHideMenu();

	});

})(jQuery);