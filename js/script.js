//For loading bar animation
$(document).ready(function() {
    //For AOS animation
    AOS.init({
        duration: 500
    });

    var simplebar = new Nanobar();
    simplebar.go(50);
    simplebar.go(100);
});