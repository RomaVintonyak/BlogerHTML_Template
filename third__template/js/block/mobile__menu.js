jQuery(document).ready(function(){
  "use script";
  var menuBtn = $(".mobile__item");
  menuBtn.on("click", function(){
    $(".mobile__dropdown").not("active").removeClass("mobile__dropdown--open");
    $(".mobile__img").not("active").removeClass("mobile__img--rotate");
    $(this).find(".mobile__dropdown").toggleClass("mobile__dropdown--open");
    $(this).find(".mobile__img").toggleClass("mobile__img--rotate"); 
  });
  menuBtn.dblclick(hideMenu);
  function hideMenu(){
    if($(this).find(".mobile__dropdown").hasClass("mobile__dropdown--open")){
      $(".mobile__dropdown").removeClass("mobile__dropdown--open");
      $(".mobile__img").removeClass("mobile__img--rotate");
    }
  }
});