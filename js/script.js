
$(document).ready(function() {

});

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

    // wait until window, stylesheets, images, links, and other media assets are loaded
    window.onload = function() {
        
        document.getElementById("container").style.display = "block";
        var $core_content = $('.core-content');

        var tl = new TimelineLite();
        tl.from($core_content, 1, {autoAlpha:0, y: 100, delay: .5, ease:Power4.easeInOut});

    };
});