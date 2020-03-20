jQuery(document).ready(function(){
  "use script";
  var cardItem = $(".post__colum");
  cardItem.mousemove(srartRotate);
    function srartRotate(event){
    //position lelement in page
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // position cursor in element
    var Xinner = event.pageX - elem_left;
    var Yinner = event.pageY - elem_top;
    // find half width & higth element
    var halfHeight = cardItem.innerHeight() / 2;
    var halfWidht = cardItem.innerWidth() / 2;
    //add css style to element
    $(this).css({
      "transform": 'rotateX('+ -(Yinner - halfHeight) / 20 + 'deg) rotateY('+ -(Xinner - halfWidht) / 20 + 'deg)'
     });
    }
   //remove css style
  cardItem.mouseleave(stopRotate);
    function stopRotate(event){
    $(this).css({
      "transform":"rotate(0deg)",
    });
  }
});


