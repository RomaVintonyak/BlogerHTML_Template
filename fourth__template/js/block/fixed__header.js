jQuery(document).ready(function(){
  "use script";
  var introH = $(".header__top").innerHeight();
  var fixMenu = $(".header__bottom");
  $(window).on("scroll", function(){
    if($(this).scrollTop() >= introH){
      fixMenu.addClass("header__bottom--fixed");
    }else{
      fixMenu.removeClass("header__bottom--fixed");
    }
  });
});