jQuery(document).ready(function() {
  "use script";
  var menuContent = $(".mobile__content");
  var burgerBtn = $("#burgerToggle");
  burgerBtn.on("click", function(event) {
    event.preventDefault();
    $(this).find("span").toggleClass("open");
    menuContent.toggleClass("mobile__content--open");
  });
});
  
