var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// get a spcifyc key from an object
var penCount = shoppingCart.pen;
console.log(penCount);

// altarnative system.....
var penCount2 = shoppingCart["pen"];
console.log(penCount2);

// get all the keys from an object
var properties = Object.keys(shoppingCart);
console.log(properties);

// get the values from an object
var propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);

//get only one property vaalue.... 
var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);

// 2.set property value
shoppingCart["mouse"] = 50;
console.log(shoppingCart);

// 3.set property value
shoppingCart[propertyName] = 89;
console.log(shoppingCart);

console.log("all the time changed the mouse value");