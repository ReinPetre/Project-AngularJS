$(document).ready(function() {

    console.log("Scripts are running");
    mobileNav();

});

function mobileNav() {

    $('.mobile-nav-toggle').on('click', function() {
        $('nav').toggleClass('is-open');
        $('.mobile-nav-toggle').toggleClass('is-open');
    });
}