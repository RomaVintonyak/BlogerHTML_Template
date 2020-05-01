jQuery(document).ready(function () {
  "use script";
  var dropList = $(".dpor__down");
  dropList.hover(startHover);
  function startHover() {
    $(this).parent(".dropDownItem").find(".nav__link").css({
      "background-color": "#2B2320",
      "color": "#ffffff"
    });
  }
  dropList.mouseleave(stopHover);
  function stopHover() {
    $(this).parent(".dropDownItem").find(".nav__link").css({
      "background-color": "transparent",
      "color": "#2B2320"
    });
  }
});
