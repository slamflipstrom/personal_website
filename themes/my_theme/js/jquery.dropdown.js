jQuery(document).ready(function(){

  console.log ('document is ready')
  
  jQuery(".mobile-nav").hide();

    
  jQuery(".drop-icon").click(function(){
    jQuery(".mobile-nav").slideToggle(120);
    console.log ('menu icon was clicked')
  });

  jQuery(".logo a").click(function(e){
    var seg = jQuery(this).attr("href");
    jQuery("body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
    e.preventDefault()
  });

  jQuery(".mobile-nav a").click(function(e){
    var seg = jQuery(this).attr("href");
    jQuery("body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
    e.preventDefault();
  });
   
  jQuery(".proceed-arrow a").click(function(e){
     var seg = jQuery(this).attr("href");
     jQuery("body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
     e.preventDefault();
     console.log ('proceed arrow was clicked')
  });
  

});