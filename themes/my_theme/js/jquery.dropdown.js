jQuery(document).ready(function(){

  console.log ('document is ready')

    
  jQuery(".drop-icon").click(function(){
    jQuery(".mobile-nav").slideToggle(120);
    return false;
    console.log ('menu icon was clicked')
  });

  jQuery(".logo a").click(function(e){
    var seg = jQuery(this).attr("href");
    jQuery("html,body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
    e.preventDefault()
    console.log ('logo was clicked')
  });

// Nav bar segment scroll
  jQuery(".mobile-nav a").click(function(e){
    var seg = jQuery(this).attr("href");
    jQuery("html,body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
    e.preventDefault();
  });
  
  // Cache selectors
  var lastId,
      topMenu = jQuery(".mobile-nav"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = jQuery(jQuery(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind to scroll
  jQuery(window).scroll(function(){
     // Get container scroll position
     var fromTop = jQuery(this).scrollTop()+topMenuHeight;
   
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if (jQuery(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
   
     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }                   
  });jQuery
   
  // Auto scrolls user to #about section
  jQuery(".proceed-arrow a").click(function(e){
     var seg = jQuery(this).attr("href");
     jQuery("html,body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
     e.preventDefault();
  });
  
  jQuery(window).keyup(function(e) {
      if (e.keyCode == 27) {
          jQuery(".modal-window").fadeOut(300); 
      }
  });
  

});