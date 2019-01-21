(function(){
    
    const link = $('.hamburger-menu-link'), 
        closeLink = $('.humburger--active');
    let menuBlock = $('.p-menu'), 
        active = 'p-menu--active'; 

    link.click(function() {
        menuBlock.addClass(active); 
    });

    closeLink.click(function() {
        menuBlock.removeClass(active); 
    });

    $(document).keyup(function(e) {

        if(e.which == 27) {
            menuBlock.removeClass(active); 
        }
    });


    $(document).mouseup(function(e) {

        if(!menuBlock.has(e.target).length) {
            menuBlock.removeClass(active);
        }
    });
    
})();

$(document).ready(function() {
    $('.team-acco__trigger').on('click', function(e){
        
        var $this = $(this),
            item = $this.closest('.team-acco__item'),
            list = $('.team-acco'),
            items = list.find('.team-acco__item'),
            content = item.find('.team-acco__content');
            overContent = list.find('.team-acco__content');
            duration = 300;
        
        
        console.log(list);

        if(!item.hasClass('active')) {
            
            items.removeClass('active');
            item.addClass('active');
            
            content.addClass('team-acco__content--active');
            
            overContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else {
            content.stop(true, true).slideUp(duration);
            item.stop(true, true).removeClass('active');

            content.stop(true, true).removeClass('team-acco__content--active');
        }
    })
});

(function(){
    var menu = $('.menu-acco'),
        item = $('.menu-acco__item'),
        link = $('.menu-acco__trigger'),
        activeItem = 'menu-acco__item--active',
        duration = 350;
        
    link.click(function() {

        var reqParent = $(this).closest('.menu-acco__item'),
            reqBlock = reqParent.find('.menu-acco__content'),
            reqWidth = menu.width() - 3*link.width(),
            list = menu.find('.menu-acco__item'),
            items = menu.find(item);

        if(reqParent.hasClass(activeItem)) {
            reqParent.removeClass(activeItem);
            item.find('.menu-acco__content').removeClass('menu-acco__content--active').stop().animate({width : 0}, duration);   
            list.removeClass('menu-acco__item--active');
            items.removeClass(activeItem);
                 
        } else {
            item.find('.menu-acco__content').removeClass('menu-acco__content--active').stop().animate({width : 0}, duration); 
            list.removeClass('menu-acco__item--active');
        
            reqParent.addClass(activeItem)
            reqBlock.addClass('menu-acco__content--active').stop().animate({width : reqWidth}, duration);
        }
    });    
})();



$('.burger__descr').click(function() {
    if ($('.burgers__consist-popup').hasClass('burgers__consist-popup--active')) {
        $('.burgers__consist-popup').removeClass('burgers__consist-popup--active'); 
        $('.burger__descr').removeClass('burger__descr--active');
    } else {
        $('.burgers__consist-popup').addClass('burgers__consist-popup--active'); 
        $('.burger__descr').addClass('burger__descr--active');
    }
  });


//slick-slider
(function(){
	$('.burger__list').slick({
		infinite: true,
        speed: 300,
        responsive: true,
        slidesToShow: 1,
		arrows: true
	});
})();


//OPS
const display = $('.maincontent');
const sections = $('.section');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
  $('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item_active')
    .siblings().removeClass('fixed-menu__item_active');
}

const performTransition = sectionEq => {
  if (inScroll) return
  inScroll = true

  const position = (sectionEq * -100) + '%';

  display.css({
    'transform': `translate(0, ${position})`,
    '-webkit-transform': `translate(0, ${position})`
  })

  sections.eq(sectionEq).addClass('section_active')
    .siblings().removeClass('section_active');

  setTimeout(() => {
    inScroll = false;
    switchMenuActiveClass(sectionEq);
  }, 1300);
}

const difineSections = sections => {
  const activeSection = sections.filter('.section_active');
  return {
    activeSection: activeSection,
    nextSection: activeSection.next(),
    prevSection: activeSection.prev()
  }
}

const scrollToSection = direction => {
  const section = difineSections(sections)

  if (inScroll) return;

  if (direction === 'up' && section.nextSection.length) { // вниз
    performTransition(section.nextSection.index())
  }

  if (direction === 'down' && section.prevSection.length) { // вверх
    performTransition(section.prevSection.index())
  }
}

$('.wrapper').on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    let direction = (deltaY > 0) 
      ? 'up' 
      : 'down'

    scrollToSection(direction);
  },
  touchmove: e => (e.preventDefault())
});

$(document).on('keydown', e => {
  const section = difineSections(sections);

  if (inScroll) return

  switch (e.keyCode) {
    case 40: // вверх
      if (!section.nextSection.length) return;
      performTransition(section.nextSection.index());
      break;

    case 38: //вниз
      if (!section.prevSection.length) return;
      performTransition(section.prevSection.index());
      break;
  }
});

if (isMobile) {
  $(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      console.log(direction);
      scrollToSection(direction);
    }
  })
}


$('[data-scroll-to]').on('click touchstart', e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const sectionIndex = parseInt($this.attr('data-scroll-to'));

  performTransition(sectionIndex);
});

// order form
$("#button_submit").click(function(e) {
    e.preventDefault();
    $('.prompt-form-container').addClass('prompt-form-container--active');
})

$(".promt__form-button").click(function(e) {
    e.preventDefault();
    $('.prompt-form-container').removeClass('prompt-form-container--active');
})


// pagination
function hideMenuOnOutsideClick(e) {
    let menu = $(".p-menu__menu");
    if(!menu.has(e.target).length) {
        hideMenu();
    }
}

function hideMenu(e) {
    if (e) e.preventDefault();
    $("#menu").removeClass("p-menu--active");
    $(document).unbind("click touchstart", hideMenuOnOutsideClick);
}

$(".p-menu__link").on("click", hideMenu);



//popup
$(function() {
    const popup = $('.review-popup');
    const authorText = $('.review__title');
    const contentText = $('.review__shorttext');
    const authorPopup = $('.review-popup__author');
    const contentPopup = $('.review-popup__content');
    let button = $('.review__button-wrap');
    let close = $('.review-popup__close');
  
    $('.review__button-wrap').on('click touchstart', e => {
      let target = $(e.target).closest('.reviews__item')
      let title = $(target).children().find('.review__title').text();
      let content = $(target).children().find('.review__shorttext').text();
  
      $('.review-popup__author').text(title);
      $('.review-popup__text').text(content);
        popup.addClass('review-popup_visible');
  
    });
  
    close.on('click touchstart', e => {
      e.preventDefault();
      popup.removeClass('review-popup_visible');
    });
  });