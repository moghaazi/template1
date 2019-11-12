//================ Header ======================================
$(function() {
  //Adjust Header Height
  $(".header").height($(window).height());

  $(window).resize(function() {
    $(".header").height($(window).height());
  });

  // Links Add Active Class
  $(".links li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  //Trigger The Bx Slider
//   $(function() {
//     $(".bxSlider").bxSlider();
//   });
// });
