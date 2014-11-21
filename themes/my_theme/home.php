<?php

/*
Template Name: Home
*/

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Sam Lindstrom</title>
  <meta name="description" content="Sam Lindstrom's personal portfolio website">
  
  <!-- For IE 9 and below. ICO should be 32x32 pixels in size -->
  <!--[if IE]><link rel="shortcut icon" href=""<?php echo get_template_directory_uri(); ?>/images/favicon.ico"><![endif]-->

  <!-- Touch Icons - iOS and Android 2.1+ 152x152 pixels in size. --> 
  <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/images/apple-touch-icon-precomposed.png">

  <!-- Firefox, Chrome, Safari, IE 11+ and Opera. 96x96 pixels in size. -->
  <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
  
  <meta name="msapplication-TileColor" content="#00aba9">
  <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/images/mstile-144x144.png">
    
  
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/large.css" media="(min-width: 800px)" />
   
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
  <script type="text/javascript" language="javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.dropdown.js"></script>
    
  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Quicksand:300,400' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>

<nav>
  <div class="logo"><a href="#landing-page">Sam Lindstrom!</a></div>
  <div class="drop-icon"><a href="#">Menu</a></div>
  <ul class="mobile-nav">
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#skills">SKILLS</a></li>
    <li><a href="#work">WORK</a></li>
    <li><a href="#contact">CONTACT</a></li>
  </ul>
</nav>


<body>
  
  <div id="landing-page">
    <h1>DEVELOPER, WANNABE DESIGNER</h1>
    <p>MY NAME'S SAM</p>  
    <div class="proceed-arrow"><a href="#about">Learn more about me!</a></div>
  </div>

  <div id="about">
    <div id="about-content">
     <h2>A LITTLE ABOUT ME</h2>
      <div class="body-text">
        <?php 
        $id=6; 
        $post = get_post($id); 
        $content = apply_filters('the_content', $post->post_content); 
        echo $content;  
        ?>
      </div>
    </div>
  </div>
  
  
  <div id="skills">
    <div id="skills-content">
      <h2>MY SKILLS</h2>
      <div class="body-text">
        <?php 
        $id=9; 
        $post = get_post($id); 
        $content = apply_filters('the_content', $post->post_content); 
        echo $content;  
        ?>
      </div>
      </div>
  </div>
  
  <div id="work">
    <div id="work-content">
      <h2>CHECK OUT MY WORK</h2>
      <div id="project1">
        <h4 class="sub-head">Grupl It</h4>
        <a href="http://decision-maker-app.herokuapp.com/">
          <img src="<?php echo get_template_directory_uri(); ?>/images/GruplIt-screenshot.jpg" alt="GruplIt" </img>
        </a>
        <p class="body-text">An app built to help friends decide upon a night out on the town. My partner handled a bulk of the back-end programming, and I implemented most of the front-end design using SASS primarily. The Javascript and jQuery were collaborative efforts, along with the mobile-responsive user interface. Languages: Ruby on Rails, CSS, SASS, HTML, Javascript, and jQuery.</p>
      </div>
      <div id="project2">
        <h4 class="sub-head">TaskMate</h4>
        <a href="http://protected-wave-4969.herokuapp.com/tasks">
          <img src="<?php echo get_template_directory_uri(); ?>/images/Taskmate-screenshot2.jpg" alt="TaskMate" </img>
        </a>
        <p class="body-text">A pair programmed task manager application. My partner and I were entrusted with the back-end code for this project, working solely with Ruby on Rails. The front end design was evolving simultaneously, so we had to adapt to handle an ever-changing codebase. Languages: Ruby on Rails, 	CSS, 	HTML, Javascript, and jQuery.</p>
      </div>
      <div id="project3">  
        <h4 class="sub-head">Grant Tracker</h4>
        <a href="http://grant-tracker.herokuapp.com/">
          <img src="<?php echo get_template_directory_uri(); ?>/images/GrantTracker-screenshot.jpg" alt="GrantTracker"  </img>
        </a>
        <p class="body-text">An app built for non-profit organizations that frequently apply for grants. It’s primary function is to assist the NPO in completing the application process. The app was pair-programmed, with my pairing working on the back-end code exclusively. Languages: Ruby on Rails, CSS, HTML, Javascript, and jQuery.</p>  
      </div> 
    </div>
  </div>
  
  <div id="links">
    <div id="links-content">
      <h2>LOOK ME UP</h2>
      <div class="social-media-links">
        <ul>
          <li class="linked-in"><a href="https://linkedin.com/in/samlindstrom/">LinkedIn</a></li>
          <li class="instagram"><a href="http://instagram.com/ssssssammmm">Instagram</a></li>
          <li class="github"><a href="https://github.com/slamflipstrom">GitHub</a></li>
          <li class="twitter"><a href="https://twitter.com/ssssssammmm">Twitter</a></li>
        </ul>
      </div>
      <p class="body-text">Please, check out the above links to see more of my work, and what I'm up to.</p>
    </div>
  </div>
  
  <div id="contact">
    <h2>GET IN TOUCH</h2>
    <div id="contact-content">
      <?php 
      $id=10; 
      $post = get_post($id); 
      $content = apply_filters('the_content', $post->post_content); 
      echo $content;  
      ?>
    </div>
  </div>
  
  <div id="footer">
    <div class="small-logo"><a href="#landing-page">Sam Lindstrom</a></div>
  </div>
  
</body>
</html>