export default function slider(){
    $('.banner-wrap').slick({
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        infinite: true
    });
}