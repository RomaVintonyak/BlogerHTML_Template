jQuery(document).ready(function(){
    "use script";
    var topBtn = $("#topBtn");
    var pageH =  $(document).innerHeight() / 3;
    topBtn.hide(1000);
    $(window).on("scroll", function(){
      if($(this).scrollTop() > pageH){
          topBtn.fadeIn(1000);
      }else{
        topBtn.fadeOut(1000);
      }
    });
    topBtn.on("click", function(event){
      event.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, 2000);
    });
});