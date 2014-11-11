$(document).ready(function(){

  console.log ('document is ready')
  
  $(".mobile-nav").hide();

    
  $(".drop-icon").click(function(){
    $(".mobile-nav").slideToggle(120);
    console.log ('menu icon was clicked')
  });


  $(".mobile-nav a").click(function(e){
    var seg = $(this).attr("href");
    $("body").animate({scrollTop: $(seg).offset().top}, "slow");
    e.preventDefault();
  });
   
  $(".proceed-arrow a").click(function(e){
     var seg = $(this).attr("href");
     $("body").animate({scrollTop: $(seg).offset().top}, "slow");
     e.preventDefault();
     console.log ('proceed arrow was clicked')
  });
  

});