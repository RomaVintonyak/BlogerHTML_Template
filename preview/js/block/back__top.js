jQuery(document).ready(function(){
  "use script";
  var introH = $("#intro").innerHeight();
  var topBtn = $("#topBtn");
  topBtn.hide(300);
  $(window).on("scroll", function(){
    if($(this).scrollTop() >= introH){
      topBtn.fadeIn(300);
    }else{
      topBtn.fadeOut(300);
    }
  });
  topBtn.on("click", function(event){
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });
});