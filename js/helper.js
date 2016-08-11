$(document).ready(function(){
    $("p").mouseover(function(){
        $("p").css("background-color", "white");
    });
    $("p").mouseout(function(){
        $("p").css("background-color", "");
        $("p").css("color", "black");
    });
});