jQuery(document).ready(function () {
  "use script";
  var catBtn = $("[data-link]");

  catBtn.on("click", function (event) {
    event.preventDefault();
    catBtn.not("active").removeClass("post__cat--link");
    $(this).toggleClass("post__cat--link");
  });

  catBtn.on("click", function (event) {
    event.preventDefault();
    var cat = $(this).data("link");
    $("[data-cat]").each(function () {
      var workCat = $(this).data("cat");
      if (workCat != cat) {
        $(this).addClass("hide__content");
      } else {
        $(this).removeClass("hide__content");
      }
    });
  });
});

