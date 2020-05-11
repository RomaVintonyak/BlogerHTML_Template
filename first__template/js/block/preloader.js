jQuery(document).ready(function () {
  "use script";
  var loader = $("#preloader");
  var timeloader = 2000;
  $(window).on("load", function () {
    setTimeout(function () {
      loader.addClass("preloader--done");
    }, timeloader);
  });
});
