let isPerfect = function (num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
};

let number = Number(prompt("Enter The Value : "));

if (number <= 0) {
    alert("Please Enter A Valid Positive Number...");
}
else if (isPerfect(number)) {
    alert(number + " is a Perfect Number...");
}
else {
    alert(number + " is Not A Perfect Number...");
}