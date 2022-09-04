import { products } from "./data/data.js";
import { Product } from "./classes/Product.js";
import { Basket } from "./classes/Basket.js";
import { ProductScreen } from "./classes/ProductSreen.js";


// console.log(products);
const btn__shopp = document.querySelector('.btn__shopp')
const btnShop = document.querySelector('.btnShop')
const HTML_header = document.getElementById('header')
const HTML_shopping = document.getElementById('shopping')
let num = 0

let productList = []
let basket

let productScreen
let productsContainer
let productsElement
let productsElementBtn



function init() {
    products.forEach(item => {
        const product = new Product(item)
        productList.push(product)
    })

    basket = new Basket()
    productScreen = new ProductScreen();
}



function start() {
    productScreen.render(productList)
    // basket.render(productList)
    productsContainer = document.querySelector('.products-container')
    productsElement = document.querySelector('.products-element')
    productsElementBtn = document.querySelectorAll('.products_element_btn')
}

function attachListener() {
    productsElementBtn.forEach((item, index) => {
        console.log(item);
        item.addEventListener('click', () => {
           basket.addToBasket(productList[index])
           
        })
    })
    btnShop.addEventListener('click', () => {
        console.log('btnShop');
        basket.shopProduct();
        if (num % 2 == 0) {
            HTML_shopping.classList.add('active')
            num++
        } else {
            HTML_shopping.classList.remove('active')
            num++
        }
    })

    btn__shopp.addEventListener('click', () => {
        console.log('btnShop-1');
        HTML_shopping.classList.remove('active')
    })
    // div.addEventListener('click',()=>{
    //     HTML_shopping.classList.remove('active')
    // })
}

init()
start()
attachListener()

// function attachListener() {
//     this.btn.addEventListener('click', () => {
//         if (this.num % 2 == 0) {
//             this.HTML_shopping.classList.add('active')
//             this.num++
//         } else {
//             this.HTML_shopping.classList.remove('active')
//             this.num++
//         }
//     })

//     this.btn__shopp.addEventListener('click', () => {
//         this.HTML_shopping.classList.remove('active')
//     })

//     this.productsElementBtn.forEach((item, index) => {
//         console.log(item);
//         item.addEventListener('click', () => {
//             basket.addToBasket(productList[index])
//             console.log("item");
//         })
//     })
// }


// productsElementBtn.forEach((item, index) => {
//     console.log(item);
//     item.addEventListener('click', () => {
//         basket.addToBasket(productList[index])
//         console.log("item");
//     })
// })
// console.log(productsElementBtn);

// productsElementBtn

// productsElementBtn.addEventListener('click',(e)=>{

//     console.log(clone);
//    if(e.target.className === 'products-element__btn'){
//     HTML_shopping.append(clone)
//    }
// })





// class LocalStorage {
//     constructor() {
//         this.keyName = 'products'
//     }
//     getProducts() {
//         const productsLocalSt = localStorage.getItem(this.keyName)
//         if (productsLocalSt !== null) {
//             return JSON.parse(productsLocalSt)
//         }
//         return []
//     }
//     putProducts(name) {
//         let products = this.getProducts()
//         products.push(name)
//         localStorage.setItem(this.keyName, JSON.stringify(products))
//     }
// }

// const localStorage = new LocalStorage()
// localStorage.getProducts('')