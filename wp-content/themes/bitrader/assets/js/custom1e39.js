/*=============================================
	=    		 Preloader JS  	         =
=============================================*/
window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.transition = 'opacity .3s ease';
        preloader.style.opacity = '0';
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 1500);
    }
});


// Add class 'menu-item-has-children' to parent li elements of '.sub-menu'
var submenuList = document.querySelectorAll("ul>li>.sub-menu");
submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});

// Fix dropdown menu overflow problem
var menuList = document.querySelectorAll("ul");
menuList.forEach(function (menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
        parentLi.addEventListener("mouseover", function () {
            var menuPos = menu.getBoundingClientRect();
            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                menu.style.left = -menu.offsetWidth + "px";
            }
        });
    }
});



/*=============================================
	=    		 Toggle Menu  	         =
=============================================*/
var menuLinks = document.querySelectorAll(".main-menu li a");
if (menuLinks) {
    menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent the event from bubbling up to parent elements
        var element = link.parentElement;
        if (parseInt(window.innerWidth, 10) < 1200) {
            if (element.classList.contains("open")) {
                element.classList.remove("open");
                element.querySelector("ul").style.display = "none";
            } else {
                element.classList.add("open");
                element.querySelector("ul").style.display = "block";
            }
        }
    });
});
}


/*=============================================
	=    		 Mobile Menu  	         =
=============================================*/
var headerBar = document.querySelector(".header-bar");
if (headerBar) {
    headerBar.addEventListener("click", function () {
        headerBar.classList.toggle("active");
        var menu = document.querySelector(".main-menu");
        if (menu) {
            menu.classList.toggle("active");
        }
    });
}


/*=============================================
	=    		 Fixed Header  	         =
=============================================*/
var fixedTop = document.querySelector("#sticky-header");
if (fixedTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            fixedTop.classList.add("header-fixed", "fadeInUp");
        } else {
            fixedTop.classList.remove("header-fixed", "fadeInUp");
        }
    });
}


/*=============================================
	=    		 AOS Active  	         =
=============================================*/
AOS.init();



/*=============================================
	=    		 Counter Active  	         =
=============================================*/
new PureCounter();



/*=============================================
	=    		 Update Jquery  	         =
=============================================*/
(function ($) {
	"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$('.scroll-to-target').removeClass('open');

	} else {
		$('.scroll-to-target').addClass('open');
	}
});

/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


$('.blog-masonry-active').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.blog-masonry-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: 1,
		}
	});
});

$("[data-bg-color]").each(function () {
	$(this).css("background-color", $(this).attr("data-bg-color"));
});

})(jQuery);