jQuery(document).ready(function() {
  "use script";
  var burgerBtn = $("#burgerToggle");
  burgerBtn.on("click", function(event) {
    event.preventDefault();
    $(this).find("span").toggleClass("open");
  });
});
  
