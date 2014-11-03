$(document).ready(function(){

  console.log ('document is ready')
  
  $(".mobile-nav").hide();

    
  $(".drop-icon").click(function(){
    $(".mobile-nav").show();
    console.log ('hamburger was clicked')
  });


});