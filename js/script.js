function openNav() {
    document.getElementById("mySidenav").style.width = "700px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        fade: false,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 0,
        asNavFor: '.slider-for',
        dots: false,
        swipe: false,
        centerMode: true,
        focusOnSelect: true
      });
});