jQuery(document).ready(function(){
  "use script";
  var catBtn = $("[data-link]");
  catBtn.on("click", function(event) {
    event.preventDefault();
    /*add clas active for links*/
    /*$("[data-filter]")
      .click(function(event) {
        event.preventDefault();
        $("[data-filter]")
          .removeClass("link__itmem--active")
          .eq($(this).index())
          .addClass("link__itmem--active");
      })
      .eq($(this))
      .addClass("link__itmem--active");*/
    /*filter menu block*/
    var cat = $(this).data("link");
    /*if (cat == "all") {
      $(this).removeClass("hide");
    } else {*/
      $("[data-cat]").each(function() {
        var workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
   /* }*/
  });
});