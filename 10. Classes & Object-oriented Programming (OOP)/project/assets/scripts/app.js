class Product{
    // title = "DEFAULT";
    // imageUrl;
    // price;
    // description;

    constructor(title,imageUrl,price,description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

class ShoppingCart{
    items = [];

    render(){
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItem{
    constructor(product){
        this.product = product;
    }

    addToCart(){
        console.log("Adding product to cart...");
        console.log(this.product);
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `; 
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList{
    products = [
        new Product(
            "A Pillow",
            "https://cdn.shopify.com/s/files/1/0195/9342/products/Slide_1.png?v=1615374854",
            19.99,
            "A soft pillow"
        ),
        new Product(
            "A Carpet",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60JW8HFKQgbg1XEYmtbgmIg1qmrcP4GlVlw&usqp=CAU",
            89.99,
            "A carpet which you might like"
        ),
    ];

    constructor () {}

    render(){        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop{
    render(){
        const renderHook = document.getElementById("app");

        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodEl);
    }
}

const shop = new Shop();
shop.render();