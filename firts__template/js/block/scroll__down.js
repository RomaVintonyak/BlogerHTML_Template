jQuery(document).ready(function(){
  "use script";
  var scrollDowm = $("#btnScroll");
  var introH = $("#intro").innerHeight();
  scrollDowm.on("click", function(event){
    event.preventDefault();
    $("html, body").animate({
      scrollTop: introH + 100
    }, 800);
  });
});