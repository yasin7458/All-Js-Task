let playAgain = true;

for (;;) {

    if (!playAgain) {
        break;
    }

    alert("Welcome To Our Game Programme...");

    let random = parseInt(Math.random() * 100) + 1;

    let Count = 0;
    let maxCount = 10;
    let isWin = false;

    alert("Guess The Number");
    alert("You Have Only 10 Attempts.");

    for (;;) {

        if (isWin || Count >= maxCount) {
            alert("Game Over!");
            alert("Correct Number Was : " + random);
            break;
        }

        let guess = Number(prompt("Enter Your Guess (1-100) :"));

        if (guess < 1 || guess > 100) {
            alert("Enter Number Between 1 To 100");
            continue;
        }

        Count++;

        if (guess > random) {
            alert("Too High");
            alert("Attempts Left : " + (maxCount - Count));
        }
        else if (guess < random) {
            alert("Too Low");
            alert("Attempts Left : " + (maxCount - Count));
        }
        else {
            isWin = true;
            alert("Congratulations! You Win");
            alert("Total Attempts : " + Count);
        }
    }

    playAgain = prompt("Play Again ? (yes / no)");

    if (playAgain.toLowerCase() == "yes") {
        playAgain = true;
    }
    else {
        playAgain = false;
        alert("Thank You For Playing!");
    }
}
