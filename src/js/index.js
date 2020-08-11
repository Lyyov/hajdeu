
let team = $("#team");

let serviceItemHeight = 0;


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

// header && footer

if(screen.width < 767) {
  $( document ).ready(function() {
    const menuList = $("#menu-list");
    const burger = $("#burger");

    burger.click(function() {
      $(this).toggleClass("burgerOpen");
      $("body").toggleClass("header-open");
    })
  
    $(document).on("click", menuList, function(e) { 
      if ($(e.target).children("span")) {
        $(e.target).next("ul").toggleClass("open")
      }
    })

    $("footer").find(".title").click(function() {
      $(this).parent().toggleClass("open")
    })
  });
}

// slideres

$( document ).ready(function() {

  const defaultSliderSettings = {
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    dots: true,
    speed: 500
  }

  const sliderServiceTestimonial = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const sliderHomeTestimonial = {
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out'
  }

  let sliderSettings = {}

  if ($("main").hasClass("home-content")) {
    sliderSettings = { ...defaultSliderSettings, ...sliderHomeTestimonial }
      $(".slider-testimonials").slick(sliderSettings);
  } else if ($("main").hasClass("services-content")) {
    sliderSettings = { ...defaultSliderSettings, ...sliderServiceTestimonial }
    $(".slider-testimonials").slick(sliderSettings);
  }

  
});

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

    
