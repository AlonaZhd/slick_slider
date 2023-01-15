$(document).ready(function(){
    $('.recipes-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        swipe: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
});