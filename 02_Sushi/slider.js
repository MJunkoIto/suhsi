jQuery(function ($) {
  function slide() {
    var speed = 3000;
    var interval = 7000; 
    var slide = $('.bg-slider .slide');
   
    var count = 0;
    var length = slide.length-1;
    setInterval(function(){
      $(slide[count]).fadeOut(speed);
      if ( count >= length ) {
        count = 0;
      } else {
        count++;
      }
      $(slide[count]).fadeIn(speed);
    }, interval);
  }
  slide();
});