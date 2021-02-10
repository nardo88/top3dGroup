# тестовое задание от top3dGroup

результат можно посмотреть по [ссылке](https://nardo88.github.io/top3dGroup/)

###интересный момент

на официальном сайте выпадающее меню появляется с задержкой, если использовать обыкновенный CSS, то при наведении можно указать, что выпадающий блок будет отображен, но при этом когда курсор просто будет пролетать над элементом меню, то отображаемый блок будет моргать.

```JavaScript
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
```
