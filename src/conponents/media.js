const media = () => {
    const headerFormInput = document.querySelector('.header-form__input');

    window.addEventListener('resize', () => {
        if (innerWidth < 768) {
            headerFormInput.placeholder = 'я ищу';
        } else {
            headerFormInput.placeholder = 'Введите запрос, например, Formlabs Form 2';
        }
    })

    if (innerWidth < 768) {
        headerFormInput.placeholder = 'я ищу';
    } else {
        headerFormInput.placeholder = 'Введите запрос, например, Formlabs Form 2';
    }
}

export default media;