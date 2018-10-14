//For loading bar animation
$(document).ready(function() {
    //For AOS animation
    AOS.init({
        easing: 'ease-in',
        duration: 1000
    });
    
    var simplebar = new Nanobar();
    simplebar.go(50);
    simplebar.go(100);
});