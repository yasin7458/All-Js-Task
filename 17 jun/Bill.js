let calculateSubtotal = function (price , qty)
{
    return price * qty;
};

let calculateGST = function (subtotal)
{
    return subtotal * 0.18;
}

let calculatTotal = function (subtotal , gst)
{
    return subtotal + gst;
}

let price = Number(prompt("Enter Price : "));
let qty = Number(prompt("Enter Quantity : "));

let subtotal = calculatTotal(price , qty);
let gst = calculateGST(subtotal);
let total = calculatTotal(subtotal , gst);

console.log("Subtotal : " , subtotal);
console.log("GST : " , gst);
console.log("Total Bill : " , total);