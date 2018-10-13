
$(document).ready(function() {
    var body = $('body');
    var core_content = $('.core-content');

    var fadein_tween = TweenLite.from(core_content, 1, {autoAlpha:0, y: 100});
 

    $(function(){
        if(body.hasClass('.black-background')){
            //TweenLite.to(body, 10, { backgroundColor: "#FF0000" }); // background color
        } else {
            //TweenLite.to(body, 2, { backgroundColor: "#FF0000" }); // background color
        }
      });
});