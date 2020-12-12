$(document).ready(function() {
    $("#back-to-top").hide();
    // fade in #back-top
    $(function() {
        var pos = $(window).scrollTop();
        console.log(pos);

        if (pos >= 400) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
