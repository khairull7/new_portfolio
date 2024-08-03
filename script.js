// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: false,
//         items: 1,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true
//     });
// });

        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
        });
        