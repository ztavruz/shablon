class ServiceStore
{
    constructor(){}

    getProducts()
    {
        let products = [];
        let savedProducts = localStorage.getItem('order-products');
        if(savedProducts != null)
        {
            products = JSON.parse(savedProducts);
        }
        return products;
    }

    putProduct(id)
    {
        let products = this.getProducts();
        let index    = products.indexOf(id);
        if(index === -1)
        {
            products.push(id);
            var pushProduct = true;
        }
        else
        {
            products.splice(index, 1);
            var pushProduct = false;
        }

        localStorage.setItem('order-products', JSON.stringify(products));

        return {
            pushProduct : pushProduct,  
            products : products
        }
    }
}

let serviceStore = new ServiceStore();
