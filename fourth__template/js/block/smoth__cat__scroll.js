jQuery(document).ready(function(){
  "use script";
  var btnScroll = $(".nav__link");
  btnScroll.on("click", function(event){
      event.preventDefault();
      var scrollId = $(this).attr("href");
      var ofsetTop = $(scrollId).offset().top;
      $("html, body").animate({
        scrollTop: ofsetTop - 100
      }, 1000);
  });
});