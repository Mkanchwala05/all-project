
$(document).on("click", ".search-field svg", function(){
	$(".search-input").slideToggle();
});

$(".submitBtn").click(function(){
	$(".card ").addClass("uploadformfiles");
  });

$('.owl-carousel').owlCarousel({
    loop:false,
  stagePadding: 15,
    margin:10,
    nav:true,
  navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
    responsive:{
        0:{
            items:2
        },
        640:{
            items:3
        },
      960:{
            items:4
        },
        1200:{
            items:6
        }
    }
})

$('.owl-header').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10,
    autoWidth:true,
});

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

function myFunction() {
  var x = document.getElementById("nav-menu-box");
  if (x.className === "nav-menus") {
    x.className += " responsive";
  } else {
    x.className = "nav-menus";
  }
}