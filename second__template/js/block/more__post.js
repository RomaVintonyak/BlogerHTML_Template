jQuery(document).ready(function(){
  "use script";
  var postBtn = $("#postBtn");
  var postItem = $(".post__colum");
  postItem.hide();
  var sliceCount = 1;
  var timeShow = 2000;
  postItem.slice(0, sliceCount).fadeIn(timeShow);
  postBtn.on("click", function(event){
    event.preventDefault();
    $(".post__colum:hidden").slice(0, sliceCount).slideDown(timeShow);
  });
});