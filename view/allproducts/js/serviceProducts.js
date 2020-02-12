  





class ServiceProducts 
{
    constructor(containerProducts, containerCounter, productsCatalog)
    {
        this.container        = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.productsCatalog  = productsCatalog;
        this.create();
    }

    create()
    {
        let wrapper = document.createElement('slot');
        wrapper.classList.add('container_products');

        let products = serviceStore.getProducts();
        this.containerCounter.innerText = products.length;


        this.productsCatalog.forEach(element => {

            let index = products.indexOf(element.id);

            let item = document.createElement('div');
            item.classList.add('item');
            wrapper.appendChild(item);

            let name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = element.name;
            item.appendChild(name);

            let img = document.createElement('div');
            img.classList.add('img');
            img.style.backgroundImage = `url(${element.img})`;
            item.appendChild(img);

            let price = document.createElement('div');
            price.classList.add('price');
            price.innerHTML = element.price.toLocaleString() + ' USD';
            item.appendChild(price);

            let button = document.createElement('button');
            button.classList.add('button');
            if(index !== -1)
            {
                button.classList.add('button_active');
                button.innerHTML = "Удалить из корзины";
                
            }
            else{
                
                button.innerHTML = "Добавить в корзину";
            }
            
            button.setAttribute('data-id', element.id);
            item.appendChild(button);

            button.addEventListener('click', function(){
                let id     = button.getAttribute('data-id');
                let result = serviceStore.putProduct(id);

                serviceProducts.containerCounter.innerText = result.products.length;
                

                if(result.pushProduct == true)
                {
                    this.classList.add('button_active');
                    this.innerText = 'Удалить из корзины';
                }
                else
                {
                    this.classList.remove('button_active');
                    this.innerText = 'Добавить в корзину';
                }
            });

        });

        this.container.appendChild(wrapper);

    }

    action()
    {
        //
    }
}


let serviceProducts = new ServiceProducts('.container_products', '.container_counter', productsCatalog);
