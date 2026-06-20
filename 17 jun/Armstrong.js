function isArmstrong(num, original = num, sum = 0) {
    if (num === 0) {
        return sum === original;
    }

    let digit = num % 10;
    sum += digit ** String(original).length;

    return isArmstrong(parseInt(num / 10), original, sum);

}

function printArmstrong(n, current = 1, count = 0) {
    if (count === n) {
        return;
    }

    if (isArmstrong(current)) {
        console.log(current);
        count++;
    }

    printArmstrong(n, current + 1, count);
}

let n = Number(prompt("Enter Number Of Terms : "));
printArmstrong(n);