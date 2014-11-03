$(document).ready(function(){

  console.log ('document is ready')
  
  $(".mobile-nav").hide();

    
  $(".drop-icon").click(function(){
    $(".mobile-nav").toggle();
    console.log ('hamburger was clicked')
  });


});