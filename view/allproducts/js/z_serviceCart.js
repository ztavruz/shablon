class ServiceCart
{
    constructor(containerCounter, containerCart, productsCatalog )
    {
        this.containerCart = document.querySelector(containerCart); 
        this.containerCounter = document.querySelector(containerCounter);
        this.productsCatalog  = productsCatalog;
        this.create();
    }

    getProductsCart()
    {
        let products = serviceStore.getProducts();
        var productCart = [];
        this.productsCatalog.forEach(element => {
    
            let index = products.indexOf(element.id);
            if(index !== -1)
            {
                productCart.push(element);
            }
           
        });
        return productCart;
    }

    create()
    {
        this.containerCounter.addEventListener('click', function(){

            serviceCart.containerCart.style.display = 'flex';
            let productCart = serviceCart.getProductsCart();
            let wrapper = document.createElement('slot');
            wrapper.classList.add('wrapper_cart');
            productCart.forEach(element => {

                // console.log(element);
                // let container_cart = serviceCart.containerCart;

                let item = document.createElement('div');
                item.classList.add('item');

                let name = document.createElement('div');
                name.classList.add('name');
                name.innerText = element.name;

                let img = document.createElement('div');
                img.style.backgroundImage = `url(${element.img})`;
                img.classList.add('img');

                let price = document.createElement('div');
                price.classList.add('price');
                price.innerText = element.price;

                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);
                
            });
            let cart_close = document.createElement('div');
            cart_close.classList.add('cart_close');
            cart_close.addEventListener('click', function(){
                serviceCart.containerCart.innerHTML = '';
                serviceCart.containerCart.style.display = 'none';
            });

            
            serviceCart.containerCart.appendChild(wrapper);
            serviceCart.containerCart.appendChild(cart_close);



        });
        
    }
}

var serviceCart = new ServiceCart('.container_counter', '.container_cart', productsCatalog);



