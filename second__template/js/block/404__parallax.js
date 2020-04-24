jQuery(document).ready(function(){
  "use script";
  var imgCenter = $(".parallax__centr");
  var paralaxContainer = $(".parallax__container");

  paralaxContainer.mousemove(startParalax);
  function startParalax(event){
    //position lelement in page
    var pos = $(this).offset();
    var elem_left = pos.left;
    // position cursor in element
    var Xinner = event.pageX - elem_left;
    // find half width & higth element
    var halfWidht = paralaxContainer.innerWidth() / 2;
    //add css style to element
    imgCenter.css({
      "transform": 'translateX('+ -(Xinner - halfWidht) / 50 + 'px)'
    });
  }
  paralaxContainer.mouseleave(stopParalax);
    function stopParalax(){
    imgCenter.css({
      "transform":"translateX(0)"  
    });
  }
});