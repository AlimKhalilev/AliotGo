let swiper = new Swiper(".services__body .services__cards", {
    slidesPerView: 4,
    spaceBetween: 70,
    grabCursor: true,
    navigation: {
        nextEl: ".services__body .swiper-button-next",
        prevEl: ".services__body .swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 100px
        100: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 576px
        577: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 4,
            spaceBetween: 70
        }
    }
});