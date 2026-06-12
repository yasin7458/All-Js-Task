var product = ["Pen", "Pencil", "Bottle"];
var choice = prompt(
    "1. For Pen\n2. For Pencil\n3. For Bottle\n\nEnter Your Choice : "
);

var bill = 0;
var quantity = 0;

switch (choice) {
    case "1":
        alert("Product Name : Pen");
        quantity = Number(prompt("Enter Quantity For Pen : "));

        if (quantity <= 0) {
            alert("Invalid Quantity!");
        }
        else if (quantity > 50) {
            alert("Pen Is Out Of Stock!");
        }
        else if (quantity <= 10) {
            bill = 10 * quantity;
            alert("Pen X " + quantity + " = Rs. " + bill);
        }
        else {
            bill = (10 * quantity) - ((10 * quantity) * 0.05);
            alert("Pen X " + quantity + " = Rs. " + bill);
        }
        break;

    case "2":
        alert("Product Name : Pencil");
        quantity = Number(prompt("Enter Quantity For Pencil : "));

        if (quantity <= 0) {
            alert("Invalid Quantity!");
        }
        else if (quantity > 100) {
            alert("Pencil Is Out Of Stock!");
        }
        else if (quantity <= 20) {
            bill = 5 * quantity;
            alert("Pencil X " + quantity + " = Rs. " + bill);
        }
        else {
            bill = (5 * quantity) - ((5 * quantity) * 0.10);
            alert("Pencil X " + quantity + " = Rs. " + bill);
        }
        break;

    case "3":
        alert("Product Name : Bottle");
        quantity = Number(prompt("Enter Quantity For Bottle : "));

        if (quantity <= 0) {
            alert("Invalid Quantity!");
        }
        else if (quantity > 70) {
            alert("Bottle Is Out Of Stock!");
        }
        else if (quantity <= 5) {
            bill = 50 * quantity;
            alert("Bottle X " + quantity + " = Rs. " + bill);
        }
        else {
            bill = (50 * quantity) - ((50 * quantity) * 0.15);
            alert("Bottle X " + quantity + " = Rs. " + bill);
        }
        break;

    default:
        alert("Invalid Choice !!");
}

alert("Total Bill : Rs. " + bill);