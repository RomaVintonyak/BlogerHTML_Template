jQuery(document).ready(function(){
  "use script";
  var menuBtn = $(".mobile__item");
  menuBtn.on("click", function(){
    $(this).find(".mobile__dropdown").toggleClass("mobile__dropdown--open");
    $(this).find("img").toggleClass("mobile__img--rotate");
  });
});