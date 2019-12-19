$(function () {
    $('.toggler').click(function () {
        $('.header').toggleClass('opened');
    });

    $('#btn').click(function () {
        $('.modal-box, .background-opacity').toggleClass('opened-modal');
    });

    $('.modal-close').click(function () {
        $('.modal-box, .background-opacity').removeClass('opened-modal');
    });

    $('.points-body .point').on('click', function () {
        $(this).toggleClass('opened');
    });

    $('.like-song').click(function () {
        $(this).toggleClass('liked');
    });

    initializeFirstScreenSlider();
    initializePlaylistSliders();
});

const initializeFirstScreenSlider = () => {
    const slider = $('.slider');
    const currentSlideSpan = $('.counter #current');
    const totalSlidesSpan = $('.counter #total');

    slider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        totalSlidesSpan.text(`0${slick.slideCount}`);
    });


    slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        currentSlideSpan.text(`0${i}`);
    });

    slider.slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1200,
        fade: true,
        cssEase: 'linear',
    });
}

const initializePlaylistSliders = () => {
    $('.playlist-slider').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
};

function notifyBarSuccess() {
    if (!$('.alert-box').length) {
        $('<div class="alert-box success" ><span class="bold">Оплачено! </span>Ежемесячный платеж был успешно получен.</div>').prependTo('body').delay(5000).fadeOut(1000, function () {
            $('.alert-box').remove();
        });
    }
}

function notifyBarFailure() {
    if (!$('.alert-box').length) {
        $('<div class="alert-box failure" ><span class="bold">Необходимо указать новый способ оплаты </span> - Не удается применить ни один из ваших текущих способов оплаты.</div>').prependTo('body').delay(5000).fadeOut(1000, function () {
            $('.alert-box').remove();
        });
    }
}

$(function () {
    $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');

        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    });
});


