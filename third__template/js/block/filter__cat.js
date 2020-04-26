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
  /*filter cat to blog pages */
  var filterBtn = $("[data-filter]");

  filterBtn.on("click", function (event) {
    event.preventDefault();
    filterBtn.not("active").removeClass("post__cat--link");
    $(this).toggleClass("post__cat--link");
  });

  filterBtn.on("click", function (event) {
    event.preventDefault();
    var catB = $(this).data("filter");
    if(catB == "all"){
      $("[data-blog]").removeClass("post__colum--hide");
    }else{
    $("[data-blog]").each(function () {
      var workCatB = $(this).data("blog");
      if (workCatB != catB) {
        $(this).addClass("post__colum--hide");
      } else {
        $(this).removeClass("post__colum--hide");
      }
    });
  }
  });
});

