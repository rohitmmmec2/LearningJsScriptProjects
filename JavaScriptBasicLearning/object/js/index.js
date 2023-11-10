let product = {
    company:'Mango',
    item_name:'Cotton striped t-shirt',
    price:861,
    rating:{
        stars:4.5,
        noOfreviews:209
    },
    displayPrice: function(){
        return `$${this.price.toFixed(2)}`;
    }
}

function getPrice(){
console.log(product);
console.log(product.price);

console.log(product.rating.stars);
console.log(product.displayPrice());
}

