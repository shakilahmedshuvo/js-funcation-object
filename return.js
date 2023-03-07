function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
    return sum;
}


var total = add(80, 20);
console.log("total,", total);



// 2nd return
function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingara(200);
console.log("Eating Singaras:", singaras);