const slider = () => {
    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 68,
        loop: true,
        navigation: {
            nextEl: '.right',
            prevEl: '.left',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 68,
            },
            0: {
                slidesPerView: 1,

            }
        },
    })
}

export default slider;