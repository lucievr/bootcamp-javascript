class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell() {
        if(this.quantity > 0) {
            this.quantity -= 1;
        } else {
         alert(`No ${this.name} left in stock`);
        }  
    }

    store(count) {
        this.quantity += count;
    }
}

const tv = new Product('tv', 20000, 15);
const phone = new Product('phone', 5000, 48);
const laptop = new Product('laptop', 25000, 12);
const headphones = new Product('headphones', 500, 52);
const mic = new Product('mic', 700, 24);
const usb = new Product('usb', 1000, 37);
const camera = new Product('camera', 12000, 27);
const lens = new Product('lens', 8000, 31);
const speakers = new Product('speakers', 2000, 9);

const products = [tv, phone, laptop, headphones, mic, usb, camera, lens, speakers];

const createProdElem = (prod) => {
    const element = document.createElement('div');
    element.className = `product ${prod.name}`;
    element.innerHTML = (
        `<h3>${prod.name}</h3>
                <ul>
                    <li class="price">Price: ${prod.price}</li>
                    <li class="quantity">Quantity: ${prod.quantity}</li>
                </ul>
                <button class="btn-buy"><i class="fas fa-shopping-cart"></i> Buy</button>
        `
    );

    const btnBuy = element.querySelector('.btn-buy');
    const quant = element.querySelector('.quantity');
    btnBuy.addEventListener('click', () => {
        prod.sell();
        quant.textContent = `Quantity: ${prod.quantity}`;
    });
    return element;
}

const addProducts = () => {
    const prodElem = document.querySelector('.products');
    prodElem.innerHTML = '';

    for(const prod of products) {
        prodElem.appendChild(createProdElem(prod));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addProducts();
});