$(document).ready(function () {
    $("p").mouseover(function () {
        $("p").css("background-color", "white");
        $("p").css("color", "black");
        $("p").css("opacity", ".80");
        $("p").css("border-color", "white");
    });
    $("p").mouseout(function () {
        $("p").css("background-color", "");
        $("p").css("color", "white");
        $("p").css("opacity", "1");
        $("p").css("border-color", "white");
    });
});