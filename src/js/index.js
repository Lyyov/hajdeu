let headerHeight = $("header").height();
let slider = $(".lightBox");
let sliderItem = $(slider).find(".item");
let target1 = 1;
let heightSubmenu = $(".submenu").height();
let heightSubmenu2 = $(".submenu2").height();
let burger = $(".burger");
let submenuButton = $(".buttHeader");
let backMenu = $(".menuMob").find("span.back")
let team = $("#team");

let serviceItemHeight = 0;

if (screen.width < 768) {
  var header = $("header");
  var distance = $("main").offset().top,
  $window = $(window);

  $window.scroll(function() {
    if ($window.scrollTop() != distance) {
      $(header).addClass('top');
    } else {
      $(header).removeClass("top");
    }
  });

  $(burger).click(function() {
    if($(this).hasClass('burgerOpen')){
      $(this).removeClass("burgerOpen");
      $('.menuMob').find("ul").css('left', '-360px');
      $('body').removeClass('bodyHidden');
    } else {
      $(this).addClass("burgerOpen");
      $('.menuMob').children("ul").css('left', '0');
      $('body').addClass('bodyHidden');
    }

    
  });
  
  $(document).mouseup(function(e) {
    if (
      !$('.menuMob').is(e.target) &&
      !$(burger).is(e.target) &&
      $('.menuMob').has(e.target).length === 0
    ) {
      $('.menuMob').find("ul").css('left', '-360px')
      $('body').removeClass('bodyHidden');
      $(burger).removeClass("burgerOpen");
    }
  });

  $(backMenu).click(function() {
    $(this).parent().parent().css('left', '-360px');
  });

  $(submenuButton).click(function(e) {
    $(this).next('ul').css('left', '0px');
    $(this).next('ul').children('li').children('span.back').text($(this).text());
  });

  $("footer").find("ul").children("li:first-child").click(function(e) {
    
    if($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
    } else {
      $("footer").find("ul").removeClass("open")
      $(this).parent().addClass("open");
    }
  })
}

if(screen.width > 768) {
  let serviceItem = $(".service-description");
  
  for (var i = 0; i < serviceItem.length; i++) {
    if($(serviceItem[i]).outerHeight() > serviceItemHeight) {
      serviceItemHeight = $(serviceItem[i]).outerHeight()
    }
  }

  $(".service-description").css("height", serviceItemHeight + "px")
  team.css("margin-top", -serviceItemHeight + "px")
  team.css("padding-top", serviceItemHeight + "px")
  
  if(heightSubmenu > heightSubmenu2) {
    $(".submenu2").css("height", heightSubmenu + "px");
  } else {
    $(".submenu").css("height", heightSubmenu2 + "px");
  }
}

// $("main").css("padding-top", headerHeight + "px");

// $(".slideParteners").slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   infinite: true,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   centerMode: true,
//   arrows: true,
//   dots: false,
//   variableWidth: true,
//   speed: 500
// });

// $(slider).slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   infinite: true,
//   autoplay: false,
//   autoplaySpeed: 5000,
//   centerMode: true,
//   arrows: true,
//   dots: false,
//   speed: 500,
//   draggable: false,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// $(".sliderHome").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   centerMode: false,
//   arrows: true,
//   dots: false,
//   speed: 500,
//   pauseOnHover: false
// });

// $(sliderItem).click(function(e) {
//   target1 = $(e.target).parents(".slick-slide").attr("data-slick-index")
//   $('#zoomModal').modal({
//     show: true
//   });
// });



$('#zoomModal').on('show.bs.modal', function (e) {
  $(".zoomSlider").slick({
    initialSlide: parseInt(target1),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 500
  });
})

$('#zoomModal').on('hidden.bs.modal', function (e) {
  $(".zoomSlider").slick("unslick")
});

$(".modalContainer").click(function(e) {
  if($(this) === $(e.target)) {
    $('#zoomModal').modal('hide');
  }
  
})

    
