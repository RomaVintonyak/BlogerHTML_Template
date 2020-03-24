jQuery(document).ready(function(){
    "use script";
    var dropBTn = $("#dropDownItem").find(".nav__link");
    console.log(dropBTn);
    var dropList = $(".dpor__down");
    dropList.hover(function(){
      dropBTn.css({
        "background-color": "#2B2320",
        "color": "#ffffff"
      });
      dropList.mouseleave(stopHover);
      function stopHover(){
        dropBTn.css({
          "background-color": "transparent",
          "color": "#2B2320"
        });
      }
    });
});