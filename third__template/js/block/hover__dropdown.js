jQuery(document).ready(function () {
  "use script";
  var dropList = $(".dpor__down");
  dropList.hover(startHover);
  function startHover() {
    $(this).parent(".dropDownItem").find(".nav__link").css({
      "background-color": "#C65C2E",
    });
  }
  dropList.mouseleave(stopHover);
  function stopHover() {
    $(this).parent(".dropDownItem").find(".nav__link").css({
      "background-color": "transparent",
    });
  }
});
