jQuery(document).ready(function(){

  jQuery(".drop-icon").click(function(){
    jQuery(".mobile-nav").slideToggle(120);
    return false;
  });

  jQuery(".logo a").click(function(e){
    var seg = jQuery(this).attr("href");
    jQuery("html,body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
    e.preventDefault()
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
  });
   
  // Auto scrolls user to #about section
  jQuery(".proceed-arrow a").click(function(e){
     var seg = jQuery(this).attr("href");
     jQuery("html,body").animate({scrollTop: jQuery(seg).offset().top}, "slow");
     e.preventDefault();
  });

  // Modal Windows
  jQuery("div#project1").click(function(e){
     jQuery("div#openModal-p1").fadeToggle(400);
    console.log("p1 toggled");
  });
  jQuery("div#project2").click(function(e){
    jQuery("div#openModal-p2").fadeToggle(400);
    console.log("p2 toggled");
    
  });
  jQuery("div#project3").click(function(e){
    jQuery("div#openModal-p3").fadeToggle(400);
    console.log("p3 toggled");
    
  });
  jQuery("div#project4").click(function(e){
    jQuery("div#openModal-p4").fadeToggle(400);
    console.log("p4 toggled");
    
  });
  jQuery("div#project5").click(function(e){
    jQuery("div#openModal-p5").fadeToggle('slow');
    console.log("p5 toggled");
  });

	$(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`\
     	$(".modal-window").fadeOut(400);
      console.log('esc key pressed');
    }
	});  

});