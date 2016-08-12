$(document).ready(function () {
    $(".intro-button-hover").mouseover(function () {
        $(".intro-button-hover").css("background-color", "white");
        $(".intro-button-hover").css("color", "black");
        $(".intro-button-hover").css("opacity", ".80");
        $(".intro-button-hover").css("border-color", "white");
    });
    $(".intro-button-hover").mouseout(function () {
        $(".intro-button-hover").css("background-color", "");
        $(".intro-button-hover").css("color", "white");
        $(".intro-button-hover").css("opacity", "1");
        $(".intro-button-hover").css("border-color", "white");
    });
});
(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        $("#nav-bar").hide();
        

        

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 1) {
                    $('#nav-bar').fadeIn();
                    $('#name-nav-bar').fadeOut();
                    $(".home-image-button1").parent().fadeOut();
                    $(".home-image-button2").parent().fadeOut();
                } else {
                    $('#nav-bar').fadeOut();
                    $('#name-nav-bar').fadeIn();
                    $(".home-image-button1").parent().fadeIn();
                    $(".home-image-button2").parent().fadeIn();
                }
            });


        });

    });
}(jQuery));
