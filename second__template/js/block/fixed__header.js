jQuery(document).ready(function(){
  "use script";
  var header_topH = $(".header__top").innerHeight();
  var fixMenu = $(".header__bottom");
  $(window).on("scroll", function(){
    if($(this).scrollTop() >= header_topH){
      fixMenu.addClass("header__bottom--fixed");
    }else{
      fixMenu.removeClass("header__bottom--fixed");
    }
  });
});