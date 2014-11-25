jQuery(document).ready(function(){

  console.log ('document is ready')

    
  jQuery(".drop-icon").click(function(){
    jQuery(".mobile-nav").slideToggle(120);
    return false;
    console.log ('menu icon was clicked')
  });

  jQuery(".logo a").click(function(e){
    var seg = jQuery(this).attr("href");
    jQuery("body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
    e.preventDefault()
    console.log ('logo was clicked')
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
  });
  

});