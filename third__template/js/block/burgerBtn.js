jQuery(document).ready(function() {
  "use script";
  var menuContent = $(".mobile__content");
  var burgerBtn = $("#burgerToggle");
  var menuBtn = $("#mobileToggle");
  /*open mobile menu*/
  burgerBtn.on("click", function(event) {
    event.preventDefault();
    $(this).find("span").addClass("open");
    menuBtn.find("span").addClass("open");
    menuContent.addClass("mobile__content--open");
  });
  /*close mobile menu*/
  menuBtn.on("click", function(event){
    event.preventDefault();
    $(this).find("span").removeClass("open");
    burgerBtn.find("span").removeClass("open");
    menuContent.removeClass("mobile__content--open");
  });
});
  
