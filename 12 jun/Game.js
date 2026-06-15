for (;;) {
    alert("Welcome To Our Game Programme...")
    let randomNumber = Number(prompt("Enter The Number (1 To 100)"));

    if (isNaN(randomNumber) || randomNumber < 1 || randomNumber > 100) {
        alert("Invalid Number...!");
        continue;
    }

    let Count = 0;
    let maxCount = 10;

    alert("Guess The Number");
    alert("You Have Only 10 Attempts.");

    for (;;) {
        if (Count >= maxCount) {
            alert("Game Over!");
            alert("Correct Number Was : " + randomNumber);
            break;
        }

        let guess = Number(prompt("Enter Your Guess :"));

        if (isNaN(guess)) {
            alert("Invalid Input!");
            continue;
        }

        if (guess < 1 || guess > 100) {
            alert("Enter Number Between 1 To 100");
            continue;
        }

        Count++;

        if (guess > randomNumber) {
            alert("Too High");
            alert("Attempts Left : " + (maxCount - Count));
        }
        else if (guess < randomNumber) {
            alert("Too Low");
            alert("Attempts Left : " + (maxCount - Count));
        }
        else {
            alert("Congratulations! You Win");
            alert("Total Attempts : " + Count);
            break;
        }
    }

    let playAgain = prompt("Play Again ? (yes / no)");

    if (playAgain == "yes") {
        continue;
    }
    else {
        alert("Thank You For Playing!");
        break;
    }
}