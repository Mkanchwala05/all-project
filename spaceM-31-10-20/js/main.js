jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

});

  $(document).ready(function() {
    $('.continueWatch-carousel').owlCarousel({
      loop: true,
      margin: 5,
      responsiveClass: true,
      lazyLoad: true,    
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: { items: 1, nav: false, loop: false},
        768: {items: 2, nav: false, loop: false},
        1024: {items: 3, nav: false, loop: false},
        1280: {items: 4, nav: true, loop: false},
        1440: {items: 4, nav: true, loop: false,},
        1640: { items: 5, nav: true, loop: false,}
      }
    })
  })



  $(document).ready(function() {
    $('.Watchlist-carousel').owlCarousel({
      loop: true,
      autoWidth:true,
      margin: 10,
      responsiveClass: true,
      lazyLoad: true,    
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: { items: 1, nav: false, loop: false},
        768: {items: 2, nav: false, loop: false},
        1024: {items: 3, nav: false, loop: false},
        1280: {items: 4, nav: true, loop: false},
        1440: {items: 4, nav: true, loop: false,},
        1640: { items: 5, nav: true, loop: false,}
      }
    })
  })


  $(document).ready(function() {
    $('.singleImg-carousel').owlCarousel({
      loop: true,
      margin: 0,
      lazyLoad: true,    
      items: 1,
      startPosition: 'URLHash'
    })
  })


  $(document).ready(function(){
    $(".owl-next").click(function(){        
      $("#continueWatching").removeClass("rightSpacePadding");
      $(".watchlistSection").removeClass("rightSpacePadding");
      $(".trendingNow").removeClass("rightSpacePadding");
      $(".newRelease").removeClass("rightSpacePadding");
      $(".upcomingMovies").removeClass("rightSpacePadding");
      $(".top10Movies").removeClass("rightSpacePadding");
    });
  });    


  var figure = $(".video").hover( hoverVideo, hideVideo );
  function hoverVideo(e) {  
      $('video', this).get(0).play(); 
  }    
  function hideVideo(e) {
      $('video', this).get(0).pause(); 
  }

  $(document).ready(function(){
    $("#payNowBtn").click(function(){        
      // $(".step").addClass("active");
      $(".confirmationBox").removeClass('active');
      $(".paymentMethodForm").addClass("active");
    });
  }); 

  $(document).ready(function(){
    $("#editProfile").click(function(){        
      // $(".step").addClass("active");
      // $(".loginPage").removeClass('active');
      $(".loginPage").addClass("editProfilebox");
    });
  }); 

  // Video Player Js 

  const playerInstance = jwplayer("player").setup({
    controls: true,
    displaytitle: false,
    fullscreen: "true",
    primary: "html5",
    stretching: "uniform",
    aspectratio: "16:9",
    renderCaptionsNatively: false,
    autostart: false,
    abouttext: "Creator Website",
    aboutlink: "https://www.facebook.com/Sickboy.LoL",
  
    skin: {
      name: "netflix"
    },
  
    logo: {
      file: "#"
    },
  
    captions: {
      color: "#FFF",
      fontSize: 14,
      backgroundOpacity: 0,
      edgeStyle: "raised"
    },
  
    playlist: [
      {
        image:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
        sources: [
          {
            file:
              "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
            label: "1080p FHD",
            default: true
          },
          {
            file:
              "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
            label: "720p HD"
          },
          {
            file:
              "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
            label: "480p SD"
          }
        ],
        captions: [
          {
            file:
              "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
            label: "English",
            kind: "captions",
            default: true
          },
          {
            file:
              "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
            label: "Français",
            kind: "captions"
          }
        ]
      }
    ]
  });
  
  playerInstance.on("ready", function () {
    // Move the timeslider in-line with other controls
    const playerContainer = playerInstance.getContainer();
    const buttonContainer = playerContainer.querySelector(".jw-button-container");
    const spacer = buttonContainer.querySelector(".jw-spacer");
    const timeSlider = playerContainer.querySelector(".jw-slider-time");
    buttonContainer.replaceChild(timeSlider, spacer);
  });