// height width

var wHeight = $(window).height();
var wWidth = $(window).width();
$('header').css('height', wHeight);
if ( (wHeight / wWidth) < (9/16) ) {
    $('header video').css('width','100%');
} else {
    $('header video').css('height','100%')
};

$( window ).resize(function() {
    $('header video').attr('style','')
    $('header').css('height', $(window).height());
    if ( ($(window).height() / $(window).width()) < (9/16) ) {
      $('header video').css('width','100%')
    } else {
      $('header video').css('height','100%')
    };
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});