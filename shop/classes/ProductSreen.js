const HTML_products = document.getElementById('products')
const HTML_shopping = document.getElementById('shopping')
const productsContainer = document.querySelector('.products-container')
let clone 
export class ProductScreen {
    productsBasketBtn = document.querySelectorAll('.products_element_btn')
    
    render(productList) {
        console.log(this.productsBasketBtn);
        let catalog = '';
        productList.forEach(({ name, price, src }) => {
            catalog += `
            <li  class = "products-element">
            <span class = "products-element__name"> ${name}</span>
            <img class = "products-element__img" src = "${src}" />
            <span class = "products-element__price"> ${price}</span>
            <button class = "products_element_btn"> buy </button>
            </li>
            `;
        })
        
        const html = `
        <ul class = "products-container">
        ${catalog}
        </ul>
        `
        HTML_products.innerHTML = html
        
        // this.productsBasketBtn.forEach(item => {
        //     item.addEventListener('click', () => {
        //         clone = productsContainer.cloneNode(true)
        //         console.log(clone);
        //         HTML_shopping.appendChild(clone)               
        //     })
        // })

    }
}



