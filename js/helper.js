/*$(document).ready(function () {
    var img_array = [0, 1, 2, 3, 4],
        newIndex = 0,
        index = 0,
        interval = 6000;
    (function changeBg() {

        // newIndex = Math.floor(Math.random() * 10) % img_array.length;
        // index = (newIndex === index) ? newIndex -1 : newIndex;

        index = (index + 1) % img_array.length;

        $('body').css('backgroundImage', function () {
            $('').animate({
                backgroundColor: 'transparent'
            }, 500, function () {                               //fade out
                setTimeout(function () {
                    console.log("wtff");
                    $('').animate({
                        backgroundColor: 'rgb(0, 0, 0)'
                    }, 500);                                    // fade in
                }, 5000);
            });
            return 'url(https://raw.githubusercontent.com/kameoxylon/peterkoehler.co/master/images/image' + img_array[index] + '.jpg)';
        });
        setTimeout(changeBg, interval);
    })();
});*/