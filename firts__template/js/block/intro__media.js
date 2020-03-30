jQuery(document).ready(function () {
  "use script";
  $(window).on("load", function (event) {
    event.preventDefault();
    $(window).on("scroll, resize", function (event) {
      event.preventDefault();
      var introFoto = $(".bloger__foto").innerHeight();
      console.log(introFoto);
      var wWidth = $(window).width();
      if (wWidth <= 576) {
        $(".intro__title").css({
          "top": introFoto + 50 + 'px'
        });
      } else {
        $(".intro__title").css({
          "top": "112px"
        });
      }
    });
  });
});