const cart = [

    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }

];

let totalPrice = 0; 

for(let i = 0 ; i < cart.length; i++){
    let cartTmp = cart[i];
    totalPrice += cartTmp.price * cartTmp.quantity;
}
console.log(`Normal For : total price = ${totalPrice}`);
totalPrice = 0;

cart.forEach(
    item => totalPrice += item.price * item.quantity
);
console.log(`For Each : total price = ${totalPrice}`);
totalPrice = 0;

totalPrice =  cart.reduce( (sum, item) => sum + item.price * item.quantity, 0 );
console.log(`reduce : total price = ${totalPrice}`);



const itemTotals = cart.map(

    item => ({
        name : item.item, price : item.price
    })
    

);

console.log("제품별 금액 : total price = ", itemTotals);
