$(document).ready(function () {
    var img_array = [0, 1],
        newIndex = 0,
        index = 0,
        interval = 5000;
    (function changeBg() {

        //  --------------------------
        //  For random image rotation:
        //  --------------------------

        //  newIndex = Math.floor(Math.random() * 10) % img_array.length;
        //  index = (newIndex === index) ? newIndex -1 : newIndex;

        //  ------------------------------
        //  For sequential image rotation:
        //  ------------------------------

        index = (index + 1) % img_array.length;

        $('body').css('backgroundImage', function () {
            $('#full-page').animate({
                backgroundColor: 'transparent'
            }, 1000, function () {
                setTimeout(function () {
                    $('#full-page').animate({
                        backgroundColor: 'rgb(255,255,255)'
                    }, 1000);
                }, 3000);
            });
            return 'url(https://raw.githubusercontent.com/kameoxylon/peterkoehler.co/master/images/image' + img_array[index] + '.jpg)';
        });
        setTimeout(changeBg, interval);
    })();
});