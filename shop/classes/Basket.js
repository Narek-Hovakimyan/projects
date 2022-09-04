export class Basket {

    shoppingProduct = document.querySelector('.shopping-product')

    HTML_header = document.getElementById('header')

    productsBasketBtn = document.querySelectorAll('.products_element_btn')

    basketProducts = []

    addToBasket(product) {
        let flag = false
        let index = -1
        console.log(product);
        this.basketProducts.forEach((item, _index) => {
            if (item.id === product.id) {
                flag = true;
                index = _index
            }

        })
        console.log(flag);
        if (flag) {
            this.basketProducts[index].count += 1
        } else {
            product.count = 1
            this.basketProducts.push(product)
        }
        console.log(this.basketProducts);

    }

    removeFromBasket() {
    }

    shopProduct() {
        // console.log(( this.basketProducts));
        // let div = document.createElement('div')
        // div.classList.add('baseket-conteneir')
        let list = ''
        this.basketProducts.forEach(({ name, price, src }) => {
            list += `
            <li class = "basket-element" >
            <span> ${name}</span>
            <img src = "${src}" />
            <span"> ${price}</span>
            <button> delete </button>
            </li>
            `
        })
        const html = `
    <ul class = "basket-products">
    ${list}
    </ul>
    `  
        
         this.shoppingProduct.innerHTML=html
        // div.appendChild(this.HTML_shopping)
        
    }









}