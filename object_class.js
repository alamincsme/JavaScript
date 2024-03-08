var arr = [1,2,3,4,5];
for (const x of arr) console.log(x + " ")



console.log("another part..........")
class  Product  {
    constructor(name, description , price ) {
        this.name = name ;
        this.description = description ;
        this.price = price ;
    }
}

var  product = new Product("Laptop", "Hp core i 3 11 Gen", 85000.00)
console.log(product)


var product = {
    name :"laptop", 
    des  : "Good product", 
    price : 650.00

}

 var var_keys = Object.keys(product)
 var var_val = Object.values(product)

for (var i = 0; i < var_keys.length ; i++) {
    console.log(var_keys[i] + " " + var_val[i]);
}


//special thinking
console.log(product.name)

