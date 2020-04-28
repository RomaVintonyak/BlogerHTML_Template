jQuery(document).ready(function () {
  "use script";
  var dropList = $(".dpor__down");
  dropList.hover(startHover);
  function startHover() {
    $(this).parent(".dropDownItem").find(".nav__link").css({
      "background-color": "#3C4652",
      "color": "#ffffff"
    });
  }
  dropList.mouseleave(stopHover);
  function stopHover() {
    $(this).parent(".dropDownItem").find(".nav__link").css({
      "background-color": "transparent",
      "color": "#3C4652"
    });
  }
});
