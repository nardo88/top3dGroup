const hover = () => {
    const productsCategorys = document.querySelectorAll('.products__category');
    const subcategory = document.querySelectorAll('.subcategory');

    const flag = {
        bool: false,
    }

    const addActive = (i, arr) => {

        setTimeout(() => {
            if (flag.bool) {
                arr.forEach((item, ind) => {
                    item.classList.remove('active');
                    if (ind === i){
                        item.classList.add('active');
                    }
                })
            }
        }, 700);
    }

    productsCategorys.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            flag.bool = true;
            addActive(i, subcategory)
        })

        item.addEventListener('mouseleave', () => {
            flag.bool = false;
                subcategory.forEach((item) => {
                    item.classList.remove('active');
                })
        })
    })

}

export default hover;


