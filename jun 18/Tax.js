const taxCalculate = (income) => {
    let tax = 0;

    if (income <= 300000) {
        tax = 0;
    }
    else if (600000) {
        tax = (income - 300000) * 0.05;
    }
    else if (900000) {
        tax = 15000 + (income - 600000) * 0.10;
    }
    else if (1200000) {
        tax = 45000 + (income - 900000) * 0.15;
    }
    else {
        tax = 90000 + (income - 1200000) * 0.20;
    }

    return tax;
};

let income = Number(prompt("Enter Income : "));
console.log("Tax : ", taxCalculate(income));