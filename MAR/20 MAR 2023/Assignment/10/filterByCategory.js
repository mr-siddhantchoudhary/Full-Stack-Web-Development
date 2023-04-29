function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category)
    }
}

let products = [
    {name: 'Shirt', category: 'Clothing'},
    {name: 'Hat', category: 'Accessories'},
    {name: 'Pants', category: 'Clothing'},
    {name: 'Socks', category: 'Accessories'},
    {name: 'Shoes', category: 'Footwear'},
];

let filterProductByCatrgory = filterByCategory(products);

let clothingProducts = filterProductByCatrgory('Clothing');
console.log(clothingProducts);

let accessoryProducts = filterProductByCatrgory('Accessories');
console.log(accessoryProducts);