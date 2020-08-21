// header && footer

if (screen.width < 992) {
  console.log("mobile");
  $(document).ready(function() {
    const menuList = $("#menu-list");
    const burger = $("#burger");

    burger.click(function() {
      console.log("bb");
      $(this).toggleClass("burgerOpen");
      $("body").toggleClass("header-open");
    });

    $(document).on("click", menuList, function(e) {
      if ($(e.target).children("span")) {
        $(e.target)
          .next("ul")
          .toggleClass("open");
      }
    });

    $("footer")
      .find(".title")
      .click(function() {
        $(this)
          .parent()
          .toggleClass("open");
      });
  });
}

// slideres

$(document).ready(function() {
  const defaultSliderSettings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  $(".slider-fixed-width").slick(defaultSliderSettings);

  $(".slider-standard-film").slick({
    ...defaultSliderSettings,
    variableWidth: true,
  });

  let target1 = 1;

  $("#zoomModal").on("show.bs.modal", function(e) {
    $(".zoomSlider").slick({
      ...defaultSliderSettings,
      initialSlide: parseInt(target1),
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          },
        },
      ],
    });
  });

  $("#zoomModal").on("hidden.bs.modal", function(e) {
    $(".zoomSlider").slick("unslick");
  });

  $(".modalContainer").click(function(e) {
    if ($(this) === $(e.target)) {
      $("#zoomModal").modal("hide");
    }
  });
});

// images split script

// $( document ).ready(function() {
//   const dragItem= document.getElementById("image-split");
//   const dragPointer= document.getElementById("drag");
//   const imageClean = document.getElementById("split-container-clean");

//   let active = false,
//       elWidth = dragItem.offsetWidth,
//       currentX,
//       initialX,
//       xOffset = 0;

//       function dragStart(e) {
//         e.preventDefault();
//         if (e.type === "touchstart") {

//           initialX = e.touches[0].clientX - xOffset;
//         } else {
//           initialX = e.clientX - xOffset;
//         }

//         if (e.target === dragPointer) {
//           active = true;
//         }
//       }

//       function dragEnd(e) {
//         initialX = currentX;

//         active = false;
//       }

//       function drag(e) {
//         if (active) {
//           e.preventDefault();

//           if (e.type === "touchmove" && e.target === dragPointer) {
//             console.log(e.touches[0].clientX - initialX)
//             currentX = e.touches[0].clientX - initialX;
//           } else {
//             currentX = e.clientX - initialX;
//           }

//           xOffset = currentX;
//           console.log(currentX)

//           setClip(currentX, dragPointer);
//         }
//       }

//       function setClip(xPos, el) {
//         if (xPos > 0 && xPos < elWidth - 10) {
//           el.style.left = xPos + "px";
//         }
//       }

//       dragItem.addEventListener("touchstart", dragStart, false);
//       dragItem.addEventListener("touchend", dragEnd, false);
//       dragItem.addEventListener("touchmove", drag, false);

//       dragItem.addEventListener("mousedown", dragStart, false);
//       dragItem.addEventListener("mouseup", dragEnd, false);
//       dragItem.addEventListener("mousemove", drag, false);

//       document.addEventListener("mouseup", () => {
//         active = false
//       })
// });
