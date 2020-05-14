$(window).on("load", function () {
  jQuery(document).ready(function () {
    "use script";
    var loader = $("#preloader");
    var timeDelay = 1000;
    setTimeout(function () {
      loader.addClass("preloader--done");
      $("body").css({
        "overflow-y": "scroll",
      });
    }, timeDelay);
  });
});
