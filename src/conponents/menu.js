const menu = () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav');
    const headerForm = document.querySelector('.header__form');
    const headerLogo = document.querySelector('.header__logo');
    const headerCartLink = document.querySelector('.header__cart-link');
    const headerModileData = document.querySelector('.header__modile-data');

    const toggleMenu = () => {
        burger.classList.toggle('open-burger');
        headerNav.classList.toggle('open-menu');

    }

    const toggleFind = () => {
        headerForm.classList.toggle('open-find');
        headerLogo.classList.toggle('hide');
        headerCartLink.classList.toggle('hide-cart');
        headerModileData.classList.toggle('hide');

    }


    header.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.burger')) {
            toggleMenu();

        }

        if (target.classList.contains('header__mobile-btn')) {
            toggleFind();
        }
    })
}

export default menu;