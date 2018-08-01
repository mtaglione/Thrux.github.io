function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;

    if(element_class != '.top-content') {
	element_class += '-container';
	scroll_to = $(element_class).offset().top - nav_height;
    }

    if($(window).scrollTop() != scroll_to) {
	$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}

jQuery(document).ready(function() {
    $('a.scroll-link').on('click', function(e) {
	e.preventDefault();
	scroll_to($(this), $('nav').outerHeight());
    });

    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function() {
	$('nav').toggleClass('navbar-no-bg');
    });
    
    var bgImage = "cross-section.png";
    
    $('.how-it-works-container').backstretch("assets/img/backgrounds/" + bgImage).find(".backstretch").addClass("dim");
    $('.top-content').backstretch("assets/img/backgrounds/" + bgImage).find(".backstretch").addClass("dim");

    $(".how-it-works-container").attr("style", "position: relative");
    $("#call-to-action-1").attr("style", "position: relative");
    $("#schedule-demo").attr("style", "position: releative");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    new WOW().init();
    
});

jQuery(window).load(function() {
    $(".loader-img").fadeOut();
    $(".loader").delay(1000).fadeOut("slow");
    
    $(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
    
});

