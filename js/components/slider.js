import 'https://code.jquery.com/jquery-1.11.0.min.js';
import 'https://code.jquery.com/jquery-migrate-1.2.1.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';

function addSlider() {
    $('.carousel__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
}

export {addSlider};