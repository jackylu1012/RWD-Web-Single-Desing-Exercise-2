export default function sticky(){
    var $header_desktop = $('.header');
    var $nav_desktop = $('.header');
    var distance_desktop = $('.header').height() + 100;
    $(document).on('scroll', function () {
        var offset = $(this).scrollTop();
        // Scrolled past
        if (offset > distance_desktop) {
            $header_desktop.removeClass('container').addClass('container-fluid');
            $header_desktop.addClass('sticky-top');
        } else {
            $header_desktop.removeClass('sticky-top');
            $header_desktop.removeClass('container-fluid').addClass('container');
        }
        if ($(window).width() < 992){
            $('.header').removeClass('container');
            $('.header').addClass('container-fluid');
        }
    });
}