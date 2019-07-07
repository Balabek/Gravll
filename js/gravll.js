$(document).ready(function(){

    // Testimonials slider
    $('.t_slider').slick({
        rtl: false,
        dots: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 580,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


    // Uncomment the line below to see the 'Sign Up' modal dialog
    // $('#signupModal').modal('show');






});